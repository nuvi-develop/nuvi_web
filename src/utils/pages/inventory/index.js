import { format } from "date-fns";

import api from "api";

export const reduceForTable = arr =>
  arr.reduce(
    (obj, record) => {
      const { id, recordDate, order, use, stock, cost = 1000 } = record;
      const formatedDate = format(new Date(recordDate), "MM/dd/yyyy hh:mm a");
      obj.recordDate.push({ id, data: formatedDate });
      obj.order.push({ id, data: order });
      obj.use.push({ id, data: use });
      obj.stock.push({ id, data: stock });
      obj.cost.push({ id, data: cost });
      return obj;
    },
    {
      recordDate: [],
      order: [],
      use: [],
      stock: [],
      cost: []
    }
  );

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
