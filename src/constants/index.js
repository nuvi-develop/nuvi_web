export const inventoryTabs = {
  MANAGING_INGREDIENTS: "MANAGING_INGREDIENTS",
  TOTAL_INGREDIENTS: "TOTAL_INGREDIENTS",
  MONTH_USE: "MONTH_USE"
};

export const DragItemTypes = {
  INGREDIENT_CARD: "INGREDIENT_CARD",
  ingredientCardCategoryOf: categoryId => `INGREDIENT_CARD_${categoryId}`
};

export const IngredientCardOrderingMode = {
  CUSTOM: { name: "CUSTOM", label: "사용자 정의 정렬" },
  CURRENT_STOCK: { name: "CURRENT_STOCK", label: "재고량 적은 순 정렬" }
};
