import React from "react";
import styled from "styled-components";

import { BorderedBox, Title } from "components/Styled";
import { dashboardColor } from "theme/colors";

const nutritionist = process.env.PUBLIC_URL + "/dashboard/nutritionist.svg";

const tableList = [
  { name: "탄수화물", unit: "g" },
  { name: "단백질", unit: "g" },
  { name: "지방", unit: "g" },
  { name: "비타민A", unit: "RE" },
  { name: "티아민", unit: "mg" },
  { name: "리보플라빈", unit: "mg" },
  { name: "비타민C", unit: "mg" },
  { name: "칼슘", unit: "mg" },
  { name: "철분", unit: "mg" },
  { name: "나트륨", unit: "mg" }
];
export default function NutritionInfoComp() {
  return (
    <NutritionInfo>
      <AbsoluteImage src={nutritionist} alt="nutiritionits" />
      <NutritionTitle>영양정보</NutritionTitle>
      <NutritionTable>
        {tableList.map(({ name, unit }, index) => (
          <TableItemContainer key={name} index={index}>
            <TableItem>{name}</TableItem>
            <TableItem>{unit}</TableItem>
          </TableItemContainer>
        ))}
      </NutritionTable>
      <CalorieBox>
        <CalorieValue>0000</CalorieValue>
        <CalorieUnit>Kcal</CalorieUnit>
      </CalorieBox>
    </NutritionInfo>
  );
}

const NutritionInfo = styled(BorderedBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 450px;
`;

const NutritionTitle = styled(Title)``;

const AbsoluteImage = styled.img`
  position: absolute;
  width: 300px;
  top: -50%;
  right: -90px;
`;

const NutritionTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const TableItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${({ index }) =>
    `solid rgba(43,136,240,${index * 0.1 + 0.03})`};
  margin-bottom: 3px;
`;

const TableItem = styled.div`
  font-size: 21px;
  font-wieght: 500;
`;

const CalorieBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
`;

const CalorieValue = styled.div`
  font-weight: 700;
  font-size: 58px;
  color: ${dashboardColor.blue};
`;
const CalorieUnit = styled.div`
  font-weight: 300;
  font-size: 23px;
  color: ${dashboardColor.gray_8};
`;
