import { actions } from "./actions";
import { initialState } from "./constants";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_ITEM_INFO:
      var copy = state.experienceItems;
      copy[action.payload].showInfo = true;
      console.log(copy);
      return {
        ...state,
        experienceItems: copy,
      };
    case actions.HIDE_ITEM_INFO:
      var copy = state.experienceItems;
      copy[action.payload].showInfo = false;
      console.log(copy);
      return {
        ...state,
        experienceItems: copy,
      };
  }
};
