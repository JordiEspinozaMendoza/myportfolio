import { actions } from "./actions";
import { initialState } from "./constants";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_DATA_PROJECTS_REQUEST:
      return {
        ...state,
        getProjects: {
          ...state.getProjects,
          isLoading: true,
          error: null,
        },
      };
    case actions.FETCH_DATA_PROJECTS_SUCCESS:
      return {
        ...state,
        getProjects: {
          ...state.getProjects,
          isLoading: false,
          error: null,
          projects: action.payload,
        },
      };
    case actions.FETCH_DATA_PROJECTS_FAILURE:
      return {
        ...state,
        getProjects: {
          ...state.getProjects,
          isLoading: false,
          error: action.payload,
        },
      };
  }
};
