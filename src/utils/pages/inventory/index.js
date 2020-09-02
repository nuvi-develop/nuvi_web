import { format } from "date-fns";

import api from "api";

export const mapForChart = async arr =>
  await Promise.all(
    arr
      .map(async record => {
        const { recordDate, InventoryIngredientId } = record;
        const currentStockRes = await api.inventory.getIngredientCurrentStock({
          ingredientId: InventoryIngredientId,
          recordDate
        });
        const currentStock = currentStockRes?.data?.currentStock;

        const formatedDate = format(new Date(record.recordDate), "MM/dd");
        const newRecord = {
          ...record,
          stock: currentStock,
          recordDate: formatedDate
        };

        return newRecord;
      })
      .reverse()
  );

export const mapForTable = async arr =>
  await Promise.all(
    arr.map(async record => {
      const { recordDate, InventoryIngredientId } = record;
      const currentStockRes = await api.inventory.getIngredientCurrentStock({
        ingredientId: InventoryIngredientId,
        recordDate
      });
      const currentStock = currentStockRes?.data?.currentStock;

      const formatedDate = format(new Date(record.recordDate), "MM/dd hh:mm a");
      const newRecord = {
        ...record,
        stock: currentStock,
        recordDate: formatedDate
      };

      return newRecord;
    })
  );
