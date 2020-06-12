import { put, select } from "redux-saga/effects";

import api from "api";
import { actions, selectors } from "data";

export function* loadFilteredIngredients(action) {
  const { name, limit } = action.payload;
  const searchingInfo = yield select(
    selectors.inventory.getCurrentSearchingInfo
  );
  const departmentId = yield select(selectors.user.getDepartmentId);

  const res = yield api.inventory.getFilterdIngredients({
    name,
    categoryId: searchingInfo.category.id,
    departmentId,
    limit
  });
  const ingredients = res.data;
  yield put(actions.inventory.setIngredients(ingredients));
}

export function* loadInventoryCategories(action) {
  const departmentId = yield select(selectors.user.getDepartmentId);
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
  //TODO
  //ingredientRecentLog 안쓰는값이므로 지우기.
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

export function* loadIngredientsOfCategories(action) {
  const { name } = action.payload;
  const departmentId = yield select(selectors.user.getDepartmentId);
  const ingredientsOfCategoriesRes = yield api.inventory.getIngredientsOfCategories(
    { departmentId, name }
  );
  const ingredientsOfCategories = ingredientsOfCategoriesRes.data;
  yield put(
    actions.inventory.setIngredientsOfCategories(ingredientsOfCategories)
  );
}

export function* addIngredientLog(action) {
  const { ingredientLogInfo } = action.payload;
  const ingredientLogRes = yield api.inventory.addIngredientLog({
    ingredientLogInfo
  });
  const ingredientId = ingredientLogRes.data.InventoryIngredientId;
  yield loadIngredientLogs({ payload: { ingredientId } });
  yield loadCurrentIngredient({ payload: { ingredientId } });
}

export function* addIngredient(action) {
  const { ingredientInfo } = action.payload;
  yield api.inventory.addIngredient({ ingredientInfo });
}

export function* deleteIngredientLog(action) {
  const { id } = action.payload;
  yield api.inventory.deleteIngredientLog({ id });
  yield resetManagingPage();
}

export function* deleteIngredient(action) {
  const { id } = action.payload;
  yield api.inventory.deleteIngredient({ id });
  yield loadIngredientsOfCategories({ payload: { name: "" } });
}

export function* resetManagingPage() {
  const ingredientId = yield select(selectors.inventory.getCurrentIngredientId);
  yield loadIngredientLogs({ payload: { ingredientId } });
  yield loadCurrentIngredient({ payload: { ingredientId } });
}

export function* loadManagingPage(action) {
  yield loadInventoryCategories(action);
  yield loadFilteredIngredients(action);
}

export function* loadTotalPage(action) {
  yield loadInventoryCategories(action);
  yield loadIngredientsOfCategories(action);
}

export function* editIngredientLog(action) {
  const { editLogInfo } = action.payload;

  yield api.inventory.editIngredientLog({ editLogInfo });
  yield resetManagingPage();
}
