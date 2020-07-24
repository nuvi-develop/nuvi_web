import produce from "immer";

import * as AT from "./actionTypes";
import { IngredientCardOrderingMode, inventoryTabs } from "constants/index";

const INITIAL_STATE = {
  currentTab: inventoryTabs.MONTH_USE,
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
  currentIngredientCardOrderingMode: IngredientCardOrderingMode.CUSTOM,
  stockCostInfo: null,
  monthUseIngredients: []
};

export default produce((draft, action) => {
  switch (action.type) {
    case AT.TOGGLE_INVENTORY_TAB:
      draft.currentTab = action.payload;
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
    case AT.SET_STOCK_COST_INFO:
      draft.stockCostInfo = action.payload;
      break;
    case AT.SET_MONTH_USE_INGREDIENTS:
      draft.monthUseIngredients = action.payload;
      break;
    default:
      return;
  }
}, INITIAL_STATE);
