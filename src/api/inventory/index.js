import { apiClient } from "../client";

export const api = {
  getAllIngredients: async ({ departmentId, limit }) => {
    const limitedRecord = limit ? limit : 10;
    return await apiClient.get(
      `api/inventory/allIngredient/departmentId/${departmentId}?limit=${limitedRecord}`
    );
  },
  getFilterdIngredients: async ({ name, categoryId, departmentId, limit }) => {
    const limitedRecord = limit ? limit : 10;
    const nameFilter = name ? name : " ";
    const categoryFilter = categoryId ? categoryId : "all";
    return await apiClient.get(
      `api/inventory/departmentId/${departmentId}/name/${nameFilter}/categoryId/${categoryFilter}?limit=${limitedRecord}`
    );
  },
  getIngredientByPk: async ({ ingredientId, limit }) => {
    const limitedRecord = limit ? limit : 10;
    return await apiClient.get(
      `api/inventory/ingredient/ingredientId/${ingredientId}?limit=${limitedRecord}`
    );
  },
  getIngredientLogsByPk: async ({ ingredientId, limit, offset }) => {
    const limitedRecord = limit ? limit : 10;
    const offsetRecord = offset ? offset : 0;
    return await apiClient.get(
      `api/inventory/ingredientLogs/ingredientId/${ingredientId}?limit=${limitedRecord}&offset=${offsetRecord}`
    );
  },
  getIngredientRecentLogByPk: async ({ ingredientId }) => {
    return await apiClient.get(
      `api/inventory/ingredientRecentLog/ingredientId/${ingredientId}`
    );
  },

  getAllInventoryCategory: async ({ departmentId, limit }) => {
    const limitedRecord = limit ? limit : 10;
    return await apiClient.get(
      `api/inventory/allCategory/departmentId/${departmentId}?limit=${limitedRecord}`
    );
  }
};
