import axios from "axios";
import { API_URL } from "./apiUrl";
export const callApi =
  (url, method, body, constants, isImage = false, token = undefined) =>
  async (dispatch) => {
    const { REQUEST, SUCCESS, FAIL } = constants;
    try {
      var contentType = "application/json";
      switch (isImage) {
        case true:
          contentType = "multipart/form-data";
          break;
        case false:
          contentType = "application/json";
      }
      dispatch({ type: REQUEST });
      const { data } = await axios({
        method,
        url: API_URL + url,
        data: body,
        headers: {
          "Content-Type": contentType,
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      dispatch({ type: SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: FAIL,
        payload: error.message,
      });
      throw error.response?.data ? error.response.data : error.message;
    }
  };
