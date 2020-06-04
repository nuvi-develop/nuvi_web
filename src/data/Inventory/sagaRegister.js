import * as sagas from "./sagas";
import * as AT from "./actionTypes";
import { takeEvery } from "redux-saga/effects";

export default function*() {
  yield takeEvery(AT.LOAD_MANAGING_PAGE, sagas.loadManagingPage);
  yield takeEvery(AT.LOAD_CURRENT_INGREDIENT, sagas.loadCurrentIngredient);
  yield takeEvery(AT.LOAD_INGREDIENT_LOGS, sagas.loadIngredientLogs);
}
