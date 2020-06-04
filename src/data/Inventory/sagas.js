import { put } from "redux-saga/effects";

import api from "api";
import { actions } from "data";

export function* loadFilteredIngredients(action) {
  const { name, category, departmentId, limit } = action.payload;
  const res = yield api.inventory.getFilterdIngredients({
    name,
    categoryId: category.id,
    departmentId,
    limit
  });
  const ingredients = res.data;
  yield put(actions.inventory.setIngredients(ingredients));
}

export function* loadInventoryCategories(action) {
  const { departmentId } = action.payload;
  const res = yield api.inventory.getAllInventoryCategory({ departmentId });
  const categories = res.data;
  yield put(actions.inventory.setCategories(categories));
}

export function* loadCurrentIngredient(action) {
  const { ingredientId } = action.payload;
  const ingredientRes = yield api.inventory.getIngredientByPk({ ingredientId });
  const ingredientRecentLogRes = yield api.inventory.getIngredientRecentLogByPk(
    { ingredientId }
  );
  const currentIngredient = ingredientRes.data;
  const ingredientRecentLog = ingredientRecentLogRes.data;
  yield put(
    actions.inventory.setCurrentIngredient({
      ...currentIngredient,
      ingredientRecentLog
    })
  );
}

export function* loadIngredientLogs(action) {
  const { ingredientId, offset } = action.payload;
  const logsRes = yield api.inventory.getIngredientLogsByPk({
    ingredientId,
    offset
  });
  const logs = logsRes.data;
  yield put(actions.inventory.setCurrentIngredientLogs(logs));
}

export function* loadManagingPage(action) {
  yield loadInventoryCategories(action);
  yield loadFilteredIngredients(action);
}
