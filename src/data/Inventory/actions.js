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

export const setCategories = payload => ({
  type: AT.SET_CATEGORIES,
  payload
});

export const setUnits = payload => ({
  type: AT.SET_UNITS,
  payload
});

export const setCurrentSearchingCategory = payload => ({
  type: AT.SET_CURRENT_SEARCHING_CATEGORY,
  payload
});

export const setCurrentSearchingIngredient = payload => ({
  type: AT.SET_CURRENT_SEARCHING_INGREDIENT,
  payload
});

export const loadCurrentIngredient = payload => ({
  type: AT.LOAD_CURRENT_INGREDIENT,
  payload
});

export const loadIngredientLogs = payload => ({
  type: AT.LOAD_INGREDIENT_LOGS,
  payload
});

export const setCurrentIngredientLogs = payload => ({
  type: AT.SET_CURRENT_INGREDIENT_LOGS,
  payload
});

export const loadTotalPage = payload => ({
  type: AT.LOAD_TOTAL_PAGE,
  payload
});

export const loadIngredientsOfCategories = payload => ({
  type: AT.LOAD_INGREDIENTS_OF_CATEOGRIES,
  payload
});

export const setIngredientsOfCategories = payload => ({
  type: AT.SET_INGREDIENTS_OF_CATEGORIES,
  payload
});

export const addIngredientLog = payload => ({
  type: AT.ADD_INGREDIENT_LOG,
  payload
});

export const addIngredient = payload => ({
  type: AT.ADD_INGREDIENT,
  payload
});

export const editIngredientLog = payload => ({
  type: AT.EDIT_INGREDIENT_LOG,
  payload
});

export const deleteIngredientLog = payload => ({
  type: AT.DELETE_INGREDIENT_LOG,
  payload
});

export const deleteIngredient = payload => ({
  type: AT.DELETE_INGREDIENT,
  payload
});

export const loadIngredientLogsForDetailGraph = payload => ({
  type: AT.LOAD_INGREDIENT_LOGS_FOR_DETAIL_GRAPH,
  payload
});
export const setIngredientLogsForDetailGraph = payload => ({
  type: AT.SET_INGREDIENT_LOGS_FOR_DETAIL_GRAPH,
  payload
});
