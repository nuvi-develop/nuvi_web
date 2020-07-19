export const getCostOfUsed = ({ orderCostList, usedValue }) => {
  return orderCostList?.slice(0).reduce(
    (result, orderCost, i, array) => {
      const { left, cost } = orderCost;
      result.sumOfConcernedLeftOrder += left;
      result.usingOrder.push(orderCost);

      if (+result.sumOfConcernedLeftOrder === +usedValue) {
        result.averageCostForUsed += (left * cost) / usedValue;
        array.splice(1);
      } else if (result.sumOfConcernedLeftOrder > usedValue) {
        result.averageCostForUsed +=
          ((left - (result.sumOfConcernedLeftOrder - usedValue)) * cost) /
          usedValue;

        array.splice(1);
      } else {
        result.averageCostForUsed += (left * cost) / usedValue;
      }

      return result;
    },
    { usingOrder: [], sumOfConcernedLeftOrder: 0, averageCostForUsed: 0 }
  );
};
