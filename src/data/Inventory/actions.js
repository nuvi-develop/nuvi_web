import * as AT from "./actionTypes";

export const toggleTabManaging = () => ({
  type: AT.TOGGLE_TAB_MANAGING
});

export const toggleTabTotal = () => ({
  type: AT.TOGGLE_TAB_TOTAl
});

export const setCurrentIngredient = payload => ({
  type: AT.SET_CURRENT_INGREDIENT,
  payload
});

export const setIngredients = payload => ({
  type: AT.SET_INGREDIENTS,
  payload
});

export const loadManagingPage = payload => ({
  type: AT.LOAD_MANAGING_PAGE,
  payload
});
