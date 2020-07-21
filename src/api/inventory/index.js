import { apiClient } from "../client";

export const api = {
  getAllIngredients: async ({ departmentId, limit }) => {
    const limitedRecord = limit ? limit : 10;
    return await apiClient.get(
      `api/inventory/allIngredient/departmentId/${departmentId}?limit=${limitedRecord}`
    );
  },
  getFilterdIngredients: async ({ name, categoryId, departmentId, limit }) => {
    const limitedRecord = limit ? limit : "nolimit";
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
  //TODO, 지우기
  getIngredientRecentLogByPk: async ({ ingredientId }) => {
    return await apiClient.get(
      `api/inventory/ingredientRecentLog/ingredientId/${ingredientId}`
    );
  },

  getAllInventoryCategory: async ({ departmentId }) => {
    return await apiClient.get(
      `api/inventory/allCategory/departmentId/${departmentId}`
    );
  },
  getAllInventoryUnits: async () => {
    return await apiClient.get(`api/inventory/allUnits`);
  },
  getIngredientsOfCategories: async ({ departmentId, name, limit, offset }) => {
    const limitedRecord = limit ? limit : 10;
    const offsetRecord = offset ? offset : 0;
    const nameFilter = name ? name : " ";
    return await apiClient.get(
      `api/inventory/ingredientsOfCategories/departmentId/${departmentId}/name/${nameFilter}?limit=${limitedRecord}&offeset=${offsetRecord}`
    );
  },
  addIngredientLog: async ({ ingredientLogInfo }) => {
    return await apiClient.post(`api/inventory/ingredientLog`, {
      ingredientLogInfo
    });
  },
  addIngredient: async ({ ingredientInfo }) => {
    return await apiClient.post(`api/inventory/ingredient`, { ingredientInfo });
  },
  editIngredientLog: async ({ editLogInfo }) => {
    return await apiClient.patch(`api/inventory/ingredientLog`, {
      editLogInfo
    });
  },

  getIngredientCurrentStock: async ({ ingredientId, recordDate }) => {
    return await apiClient.get(
      `api/inventory/ingredientCurrentStock/ingredientId/${ingredientId}/recordDate/${recordDate}`
    );
  },
  deleteIngredientLog: async ({ id }) => {
    return await apiClient.delete(
      `api/inventory/ingredientLog/ingredientLogId/${id}`
    );
  },

  deleteIngredient: async ({ id }) => {
    return await apiClient.delete(
      `api/inventory/ingredient/ingredientId/${id}`
    );
  },

  isSameIngredient: async ({ ingredient }) => {
    const ingredientName = ingredient ? ingredient : "";
    return await apiClient.get(
      `api/inventory/isSame/ingredientName?ingredientName=${ingredientName}`
    );
  },

  editIngredientOrder: async ({ movingInfo }) => {
    return await apiClient.patch(`api/inventory/ingredient/order`, {
      movingInfo
    });
  },

  getIngredientEtcLogsPerDates: async ({ searchingEtcText, ingredientId }) => {
    const searchingEtcTextFilter = searchingEtcText ? searchingEtcText : " ";

    const ingredientIdFilter = ingredientId ? ingredientId : "all";

    return await apiClient.get(
      `api/inventory/ingredientEtcLogsPerDates?searchingEtcText=${searchingEtcTextFilter}&&ingredientId=${ingredientIdFilter}`
    );
  },

  addIngredientEtcLogsPerDates: async addEtcLogsInfo => {
    return await apiClient.post(
      `api/inventory/ingredientEtcLogsPerDates`,
      addEtcLogsInfo
    );
  },
  editIngredientEtcLogsPerDates: async editEtcLogsInfo => {
    return await apiClient.put(
      `api/inventory/ingredientEtcLogsPerDates`,
      editEtcLogsInfo
    );
  },
  deleteIngredientEtcLogsPerDates: async deleteEtcLogsInfo => {
    const { etcIngredientId } = deleteEtcLogsInfo;
    return await apiClient.delete(
      `api/inventory/ingredientEtcLogsPerDates/${etcIngredientId}`,
      deleteEtcLogsInfo
    );
  },
  getIngredientStockCostList: async ({ ingredientId, currentStock }) => {
    return await apiClient.get(
      `api/inventory/ingredientStockCostList/${ingredientId}/${currentStock}`
    );
  }
};
