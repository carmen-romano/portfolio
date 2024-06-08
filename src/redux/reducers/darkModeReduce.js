import { DARK_MODE_TOGGLE } from "../actions";

const initialState = {
  darkMode: true,
};

export const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE_TOGGLE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};
