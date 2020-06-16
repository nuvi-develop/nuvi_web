export const getCurrentTab = state => state.inventory.currentTab;

export const getIngredients = state => state.inventory.ingredients;

export const getCurrentIngredient = state => state.inventory.currentIngredient;

export const getCurrentIngredientId = state =>
  state.inventory.currentIngredient?.id;

export const getCategories = state => state.inventory.categories;

export const getCurrentSearchingInfo = state => ({
  category: state.inventory.currentSearchingCategory,
  ingredientName: state.inventory.currentSearchingIngredient
});

export const getCurrentIngredientLogs = state =>
  state.inventory.currentIngredientLogs;

export const getIngredientsOfCategories = state =>
  state.inventory.ingredientsOfCategories;

export const getIngredientLogsForDetailGraph = state =>
  state.inventory.ingredientLogsForDetailGraph;
