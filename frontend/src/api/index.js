import axios from "axios";
import { API_URL } from "./apiUrl";
export const callApi = async (
  url,
  method,
  body,
  constants,
  dispatch,
  isImage = false,
  token = undefined
) => {
  const { REQUEST, SUCCESS, FAILURE } = constants;
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
      type: FAILURE,
      payload: error.message,
    });
    throw error.response?.data ? error.response.data : error.message;
  }
};
