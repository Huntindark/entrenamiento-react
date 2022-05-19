import React, { createContext, useReducer, useEffect } from "react";
import { APIReducer } from "./Reducers";
import { initial } from "./Initial";
import PropTypes from "prop-types";
import { fetchApi } from "../api";

export const APIContext = createContext();

const APIStore = ({ children }) => {
  const [state, dispatch] = useReducer(APIReducer, initial);
  const contextValue = { state, dispatch };

  useEffect(() => {
    const getAPIData = async () => {
      let members = await fetchApi({ path: "members" });
      let projects = await fetchApi({ path: "projects" });
      let roles = await fetchApi({ path: "roles" });
      dispatch({ type: "SET_MEMBERS", payload: members });
      dispatch({ type: "SET_PROJECTS", payload: projects });
      dispatch({ type: "SET_ROLES", payload: roles });
    };
    dispatch({ type: "START_LOADING" });
    getAPIData().then(() => dispatch({ type: "END_LOADING" }));
  }, []);

  return (
    <APIContext.Provider value={contextValue}>{children}</APIContext.Provider>
  );
};

APIStore.propTypes = {
  children: PropTypes.node,
};

export default APIStore;
