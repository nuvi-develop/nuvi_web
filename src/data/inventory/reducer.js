import produce from "immer";

import * as AT from "./actionTypes";
import { IngredientCardOrderingMode } from "constants/index";

const inventoryTabs = {
  MANAGING_INGREDIENTS: "MANAGING_INGREDIENTS",
  TOTAL_INGREDIENTS: "TOTAL_INGREDIENTS"
};

const INITIAL_STATE = {
  currentTab: inventoryTabs.MANAGING_INGREDIENTS,
  ingredients: [],
  ingredientsOfCategories: [],
  currentIngredient: null,
  categories: [],
  units: [],
  currentIngredientLogs: [],
  ingredientLogsForDetailGraph: [],
  ingredientEtcLogsPerDates: {},
  currentSearchingCategory: "all",
  currentSearchingIngredient: "",
  currentSearchingEtcIngredient: "",
  currentIngredientCardOrderingMode: IngredientCardOrderingMode.CUSTOM
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
    case AT.SET_UNITS:
      draft.units = action.payload;
      break;
    case AT.SET_CURRENT_SEARCHING_CATEGORY:
      draft.currentSearchingCategory = action.payload;
      break;
    case AT.SET_CURRENT_SEARCHING_INGREDIENT:
      draft.currentSearchingIngredient = action.payload;
      break;
    case AT.SET_CURRENT_SEARCHING_ETC_INGREDIENT:
      draft.currentSearchingEtcIngredient = action.payload;
      break;
    case AT.SET_CURRENT_INGREDIENT_LOGS:
      draft.currentIngredientLogs = action.payload;
      break;
    case AT.SET_INGREDIENTS_OF_CATEGORIES:
      draft.ingredientsOfCategories = action.payload;
      break;
    case AT.SET_INGREDIENT_LOGS_FOR_DETAIL_GRAPH:
      draft.ingredientLogsForDetailGraph = action.payload;
      break;
    case AT.SET_CURRENT_INGREDIENT_CARD_ORDERING_MODE:
      draft.currentIngredientCardOrderingMode = action.payload;
      break;
    case AT.SET_INGREDIENT_ETC_LOGS_PER_DATES:
      draft.ingredientEtcLogsPerDates = action.payload;
      break;
    default:
      return;
  }
}, INITIAL_STATE);
