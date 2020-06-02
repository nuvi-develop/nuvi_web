import { apiClient } from "../client";

export const api = {
  getAllIngredients: async ({ departmentId, limit }) => {
    const limitedRecord = limit ? limit : 10;
    return await apiClient.get(
      `api/inventory/allIngredient/departmentId/${departmentId}?limit=${limitedRecord}`
    );
  },
  getFilterdIngredients: async ({ name, categoryId, limit }) => {
    const limitedRecord = limit ? limit : 10;
    const nameFilter = name ? name : null;
    const categoryFilter = categoryId ? categoryId : null;
    return await apiClient.get(
      `api/inventory/name/${nameFilter}/categoryId/${categoryFilter}?limit=${limitedRecord}`
    );
  },
  getIngredientByPk: async ({ ingredientId, limit }) => {
    const limitedRecord = limit ? limit : 10;
    return await apiClient.get(
      `api/inventory/ingredient/ingredientId/${ingredientId}?limit=${limitedRecord}`
    );
  },

  getInventoryLog: async ({ ingredientId, limit }) => {
    const limitedRecord = limit ? limit : 10;
    return await apiClient.get(
      `api/inventory/log/ingredientId/${ingredientId}?limit=${limitedRecord} `
    );
  },

  getAllInventoryCategory: async ({ departmentId, limit }) => {
    const limitedRecord = limit ? limit : 10;
    return await apiClient.get(
      `api/inventory/allCategory/departmentId/${departmentId}?limit=${limitedRecord}`
    );
  }
};
