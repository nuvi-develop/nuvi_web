export const getCurrentTab = state => state.inventory.currentTab;

export const getIngredients = state => state.inventory.ingredients;

export const getCurrentIngredients = state =>
  state.inventory.currentIngredients;

export const getCategories = state => state.inventory.categories;

export const getCurrentSearchingInfo = state => ({
  category: state.inventory.currentSearchingCategory,
  ingredientName: state.inventory.currentSearchingIngredient
});
