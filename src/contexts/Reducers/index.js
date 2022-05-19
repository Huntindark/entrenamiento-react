export const APIReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_PROJECTS":
      return {
        ...state,
        projects: payload,
      };
    case "SET_MEMBERS":
      return {
        ...state,
        members: payload,
      };
    case "SET_ROLES":
      return {
        ...state,
        roles: payload,
      };
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "END_LOADING":
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
