import { put } from "redux-saga/effects";

import api from "api";

export function* loadFilteredIngredients(action) {
  const { name, categoryId, limit } = action.payload;
  const res = yield api.inventory.getFilterdIngredients({
    name,
    categoryId,
    limit
  });
  console.log("res", res);
}

export function* loadInventoryCategories(action) {
  const { departmentId } = action.payload;
  const res = yield api.inventory.getAllInventoryCategory({ departmentId });
  console.log("res.data", res.data);
}

export function* loadCurrentIngredient() {}

export function* loadManagingPage(action) {
  yield loadInventoryCategories(action);
}
