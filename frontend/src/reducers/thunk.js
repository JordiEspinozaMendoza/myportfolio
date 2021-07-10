import isFunction from "lodash/isFunction";
import React from "react";

export const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const enhancedDispatch = React.useCallback((action) => {
    if (isFunction(action)) {
      action(dispatch);
    } else dispatch(action);
  });

  return [state, enhancedDispatch];
};
