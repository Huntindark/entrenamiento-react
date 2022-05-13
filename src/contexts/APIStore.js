import React, { createContext, useReducer, useEffect } from "react";
import { APIReducer } from "./Reducers"; 
import { initial } from "./Initial";
import PropTypes from "prop-types";

export const APIContext = createContext()
// export const useAPIContext = useContext(APIContext)

const APIStore = ({ children }) => {
  const [ state, dispatch ] = useReducer(APIReducer, initial)
  const contextValue = {state, dispatch}
  const url = "https://tswwqpqg6i.execute-api.us-east-1.amazonaws.com/Test/";

  const fetchApi = async (path, type) => {
    try {
      const payload = await fetch(`${url}${path}`).then((payload) =>
        payload.json()
      );
      dispatch(state, {type: type, payload: payload})
      return payload;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getAPIData = async () => {
      await fetchApi("members", "SET_MEMBERS");
      await fetchApi("projects", "SET_PROJECTS");
      await fetchApi("roles", "SET_ROLES");  
    }
    dispatch(state, {type: "START_LOADING"})
    getAPIData()
    dispatch(state, {type: "END_LOADING"})
  }, []);

  return <APIContext.Provider value={contextValue}>{children}</APIContext.Provider>
}

APIStore.propTypes = {
  children: PropTypes.node,
};

export default APIStore