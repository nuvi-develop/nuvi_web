import { apiClient } from "../client";

export const api = {
  getAllIngredients: async ({ departmentId, limit }) => {
    const limitedRecord = limit ? limit : 10;
    return await apiClient.get(
      `api/inventory/allIngredient/departmentId/${departmentId}?limit=${limitedRecord}`
    );
  },
  getFilterdIngredients: async ({ name, category, limit }) => {
    const limitedRecord = limit ? limit : 10;
    const nameFilter = name ? name : null;
    const categoryFilter = category ? category : null;
    return await apiClient.get(
      `api/inventory/name/${nameFilter}/category/${categoryFilter}?limit=${limitedRecord}`
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
      `api/inventory/allCategory/departmentId/${departmentId}?limti=${limitedRecord}`
    );
  }
};
