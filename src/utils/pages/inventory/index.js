import { format } from "date-fns";

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

export const mapForChart = arr =>
  arr
    .map(record => {
      const formatedDate = format(new Date(record.recordDate), "MM/dd");
      const newRecorde = {
        ...record,
        recordDate: formatedDate
      };

      return newRecorde;
    })
    .reverse();
