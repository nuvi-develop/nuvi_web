import produce from "immer";

import * as AT from "./actionTypes";

const inventoryTabs = {
  MANAGING_INGREDIENTS: "MANAGING_INGREDIENTS",
  TOTAL_INGREDIENTS: "TOTAL_INGREDIENTS"
};

const INITIAL_STATE = {
  currentTab: inventoryTabs.MANAGING_INGREDIENTS,
  ingredients: [],
  currentIngredient: null,
  categories: [],
  currentIngredientLogs: [],
  currentSearchingCategory: "all",
  currentSearchingIngredient: null
};

export default produce((draft, action) => {
  switch (action.type) {
    case AT.TOGGLE_TAB_MANAGING:
      draft.currentTab = inventoryTabs.MANAGING_INGREDIENTS;
      break;
    case AT.TOGGLE_TAB_TOTAl:
      draft.currentTab = inventoryTabs.TOTAL_INGREDIENTS;
      break;
    case AT.SET_CURRENT_INGREDIENT:
      draft.currentIngredient = action.payload;
      break;
    case AT.SET_INGREDIENTS:
      draft.ingredients = action.payload;
      break;
    case AT.SET_CATEGORIES:
      draft.categories = action.payload;
      break;
    case AT.SET_CURRENT_SEARCHING_CATEGORY:
      draft.currentSearchingCategory = action.payload;
      break;
    case AT.SET_CURRENT_SEARCHING_INGREDIENT:
      draft.currentSearchingIngredient = action.payload;
      break;
    case AT.SET_CURRENT_INGREDIENT_LOGS:
      draft.currentIngredientLogs = action.payload;
      break;
    default:
      return;
  }
}, INITIAL_STATE);
