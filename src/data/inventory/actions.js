import * as AT from "./actionTypes";

export const toggleInventoryTab = payload => ({
  type: AT.TOGGLE_INVENTORY_TAB,
  payload
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

export const moveIngredientCard = payload => ({
  type: AT.MOVE_INGREDIENT_CARD,
  payload
});

export const setCurrentIngredientCardFilteringMode = payload => ({
  type: AT.SET_CURRENT_INGREDIENT_CARD_ORDERING_MODE,
  payload
});

export const loadIngredientEtcLogsPerDates = payload => ({
  type: AT.LOAD_INGREDIENT_ETC_LOGS_PER_DATES,
  payload
});

export const addIngredientEtcLogsPerDates = payload => ({
  type: AT.ADD_INGREDIENT_ETC_LOGS_PER_DATES,
  payload
});
export const editIngredientEtcLogsPerDates = payload => ({
  type: AT.EDIT_INGREDIENT_ETC_LOGS_PER_DATES,
  payload
});
export const deleteIngredientEtcLogsPerDates = payload => ({
  type: AT.DELETE_INGREDIENT_ETC_LOGS_PER_DATES,
  payload
});

export const setIngredientEtcLogsPerDates = payload => ({
  type: AT.SET_INGREDIENT_ETC_LOGS_PER_DATES,
  payload
});

export const setCurrentSearchingEtcIngredient = payload => ({
  type: AT.SET_CURRENT_SEARCHING_ETC_INGREDIENT,
  payload
});

export const setStockCostInfo = payload => ({
  type: AT.SET_STOCK_COST_INFO,
  payload
});

export const setMonthUseIngredients = payload => ({
  type: AT.SET_MONTH_USE_INGREDIENTS,
  payload
});

export const loadMonthUseIngredients = payload => ({
  type: AT.LOAD_MONTH_USE_INGREDIENTS,
  payload
});
