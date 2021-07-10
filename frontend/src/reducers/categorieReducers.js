import { actions } from "../constants/categorieConstants";
export const categorieCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.CATEGORIE_CREATE_REQUEST:
      return { loading: true };
    case actions.CATEGORIE_CREATE_SUCCESS:
      return { loading: false, success: true };
    case actions.CATEGORIE_CREATE_FAIL:
      return { loading: false, success: false, error: action.payload };
    case actions.CATEGORIE_CREATE_RESET:
      return { loading: false, success: false, error: null };
    default:
      return state;
  }
};
export const categoriesListReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.CATEGORIE_LIST_REQUEST:
      return { loading: true };
    case actions.CATEGORIE_LIST_SUCCESS:
      return { loading: false, success: true, categories: action.payload };
    case actions.CATEGORIE_LIST_FAIL:
      return { loading: false, success: false };
    case actions.CATEGORIE_LIST_RESET:
      return { loading: false, success: false, error: null };
    default:
      return state;
  }
};
export const categorieDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.CATEGORIE_DETAILS_REQUEST:
      return { loading: true };
    case actions.CATEGORIE_DETAILS_SUCCESS:
      return { loading: false, success: true, categorie: action.payload };
    case actions.CATEGORIE_DETAILS_FAIL:
      return { loading: false, success: false };
    case actions.CATEGORIE_DETAILS_RESET:
      return { loading: false, success: false, error: null };
    default:
      return state;
  }
};
export const categorieUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.CATEGORIE_EDIT_REQUEST:
      return { loading: true };
    case actions.CATEGORIE_EDIT_SUCCESS:
      return { loading: false, success: true };
    case actions.CATEGORIE_EDIT_FAIL:
      return { loading: false, success: false };
    case actions.CATEGORIE_EDIT_RESET:
      return { loading: false, success: false, error: null };
    default:
      return state;
  }
};
export const categorieDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.CATEGORIE_DELETE_REQUEST:
      return { loading: true };
    case actions.CATEGORIE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case actions.CATEGORIE_DELETE_FAIL:
      return { loading: false, success: false };
    case actions.CATEGORIE_DELETE_RESET:
      return { loading: false, success: false, error: null };
    default:
      return state;
  }
};
