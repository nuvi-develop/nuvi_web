import { IngredientCardOrderingMode } from "constants/index";

export const getCurrentTab = state => state.inventory.currentTab;

export const getIngredients = state => state.inventory.ingredients;

export const getCurrentIngredient = state => state.inventory.currentIngredient;

export const getCurrentIngredientId = state =>
  state.inventory.currentIngredient?.id;

export const getCurrentIngredientUnitName = state =>
  state.inventory.currentIngredient?.IngredientUnit?.name;

export const getCategories = state => state.inventory.categories;

export const getUnits = state => state.inventory.units;

export const getCurrentSearchingInfo = state => ({
  category: state.inventory.currentSearchingCategory,
  ingredientName: state.inventory.currentSearchingIngredient
});

export const getCurrentEtcSearchText = state =>
  state.inventory.currentSearchingEtcIngredient;

export const getCurrentIngredientLogs = state =>
  state.inventory.currentIngredientLogs;

export const getIngredientsOfCategories = state =>
  state.inventory.ingredientsOfCategories;

export const getIngredientLogsForDetailGraph = state =>
  state.inventory.ingredientLogsForDetailGraph;

export const getCurrentIngredientCardOrderingMode = state =>
  state.inventory.currentIngredientCardOrderingMode;

export const getIsCurrentIngredientCardOrderingModeCustom = state =>
  state.inventory.currentIngredientCardOrderingMode?.name ===
  IngredientCardOrderingMode.CUSTOM.name;

export const getIngredientEtcLogsPerDates = state =>
  state.inventory.ingredientEtcLogsPerDates;
