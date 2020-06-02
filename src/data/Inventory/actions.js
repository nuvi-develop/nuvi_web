import * as AT from "./actionTypes";

export const toggleTabManaging = () => ({
  type: AT.TOGGLE_TAB_MANAGING
});

export const toggleTabTotal = () => ({
  type: AT.TOGGLE_TAB_TOTAl
});

export const setCurrentIngredients = payload => ({
  type: AT.SET_CURRENT_INGREDIENTS,
  payload
});
