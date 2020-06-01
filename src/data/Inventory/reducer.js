import produce from "immer";

import * as AT from "./actionTypes";

const inventoryTabs = {
  MANAGING_INGREDIENTS: "MANAGING_INGREDIENTS",
  TOTAL_INGREDIENTS: "TOTAL_INGREDIENTS"
};

const INITIAL_STATE = {
  currentTab: inventoryTabs.MANAGING_INGREDIENTS
};

export default produce((draft, action) => {
  switch (action.type) {
    case AT.TOGGLE_TAB_MANAGING:
      draft.currentTab = inventoryTabs.MANAGING_INGREDIENTS;
      break;
    case AT.TOGGLE_TAB_TOTAl:
      draft.currentTab = inventoryTabs.TOTAL_INGREDIENTS;
      break;
    default:
      return;
  }
}, INITIAL_STATE);
