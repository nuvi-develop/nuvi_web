import * as sagas from "./sagas";
import * as AT from "./actionTypes";
import { takeEvery } from "redux-saga/effects";

export default function*() {
  yield takeEvery(AT.LOAD_MANAGING_PAGE, sagas.loadManagingPage);
  yield takeEvery(AT.LOAD_CURRENT_INGREDIENT, sagas.loadCurrentIngredient);
  yield takeEvery(AT.LOAD_INGREDIENT_LOGS, sagas.loadIngredientLogs);
  yield takeEvery(AT.LOAD_TOTAL_PAGE, sagas.loadTotalPage);
  yield takeEvery(AT.ADD_INGREDIENT_LOG, sagas.addIngredientLog);
  yield takeEvery(AT.ADD_INGREDIENT, sagas.addIngredient);
  yield takeEvery(AT.EDIT_INGREDIENT_LOG, sagas.editIngredientLog);
  yield takeEvery(AT.DELETE_INGREDIENT_LOG, sagas.deleteIngredientLog);
  yield takeEvery(AT.DELETE_INGREDIENT, sagas.deleteIngredient);
}
