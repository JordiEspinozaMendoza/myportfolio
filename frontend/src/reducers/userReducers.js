import { actions } from "../constants/userContants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_REQUEST:
      return { loading: true };
    case actions.USER_LOGIN_SUCESS:
      localStorage.setItem("token", JSON.stringify(action.payload.access));
      return { loading: false, success: true, userInfo: action.payload };
    case actions.USER_LOGIN_FAIL:
      return { loading: false, success: false, error: action.payload };
    case actions.USER_LOGIN_RESET:
      return { loading: false, success: false, error: null };
    case actions.USER_LOGOUT:
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
      return {};
    default:
      return state;
  }
};
