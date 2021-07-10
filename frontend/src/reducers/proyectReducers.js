import { actions } from "../constants/proyectConstants";
export const proyectCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.PROYECT_CREATE_REQUEST:
      return { loading: true };
    case actions.PROYECT_CREATE_SUCCESS:
      return { loading: false, success: true };
    case actions.PROYECT_CREATE_FAIL:
      return { loading: false, success: false, error: action.payload };
    case actions.PROYECT_CREATE_RESET:
      return { loading: false, success: false, error: null };
    default:
      return state;
  }
};
export const proyectsListReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.PROYECT_LIST_REQUEST:
      return { loading: true };
    case actions.PROYECT_LIST_SUCCESS:
      return { loading: false, success: true, proyects: action.payload };
    case actions.PROYECT_LIST_FAIL:
      return { loading: false, success: false, error: action.payload };
    case actions.PROYECT_LIST_RESET:
      return { loading: false, success: false, error: null };
    default:
      return state;
  }
};
export const proyectDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.PROYECT_DETAILS_REQUEST:
      return { loading: true };
    case actions.PROYECT_DETAILS_SUCCESS:
      return { loading: false, success: true, proyect: action.payload };
    case actions.PROYECT_DETAILS_FAIL:
      return { loading: false, success: false, error: action.payload };
    case actions.PROYECT_DETAILS_RESET:
      return { loading: false, success: false, error: null };
    default:
      return state;
  }
};
export const proyectEditReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.PROYECT_EDIT_REQUEST:
      return { loading: true };
    case actions.PROYECT_EDIT_SUCCESS:
      return { loading: false, success: true };
    case actions.PROYECT_EDIT_FAIL:
      return { loading: false, success: false, error: action.payload };
    case actions.PROYECT_EDIT_RESET:
      return { loading: false, success: false, error: null };
    default:
      return state;
  }
};
export const proyectDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.PROYECT_DELETE_REQUEST:
      return { loading: true };
    case actions.PROYECT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case actions.PROYECT_DELETE_FAIL:
      return { loading: false, success: false, error: action.payload };
    case actions.PROYECT_DELETE_RESET:
      return { loading: false, success: false, error: null };
    default:
      return state;
  }
};
