import React from "react";
import ReactExport from "react-export-excel";
import styled from "styled-components";
import { getMonth } from "date-fns";

const { ExcelFile } = ReactExport;
const { ExcelSheet, ExcelColumn } = ExcelFile;

const dataSet1 = [
  {
    name: "Johson",
    amount: 30000,
    sex: "M",
    is_married: true
  },
  {
    name: "Monika",
    amount: 355000,
    sex: "F",
    is_married: false
  },
  {
    name: "John",
    amount: 250000,
    sex: "M",
    is_married: false
  },
  {
    name: "Josef",
    amount: 450500,
    sex: "M",
    is_married: true
  }
];

export default function ExcelExportButton({ data, searchDate }) {
  const month = getMonth(new Date(searchDate)) + 1;

  const newData = data.map(dataElement => {
    const { reducedOrdersByCost, unit } = dataElement;
    const reducedOrdersByCostString = Object.keys(reducedOrdersByCost).reduce(
      (resultString, key) => {
        resultString += `${key}원 : ${reducedOrdersByCost[key]} ${unit} / `;
        return resultString;
      },
      ""
    );
    return {
      ...dataElement,
      reducedOrdersByCostString
    };
  });

  return (
    <ExcelFile
      filename={`재고관리 ${month} 월 내역`}
      element={<CsvExportButton>엑셀 다운로드</CsvExportButton>}
    >
      <ExcelSheet data={newData} name={`${month} 월 내역`}>
        <ExcelColumn label="재료명" value="ingredientName" />
        <ExcelColumn label="월말 재고량" value="currentStock" />
        <ExcelColumn label="단위" value="unit" />
        <ExcelColumn label="재고량 단가" value="reducedOrdersByCostString" />
      </ExcelSheet>
    </ExcelFile>
  );
}

const CsvExportButton = styled.div`
  cursor: pointer;
  margin: 3px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray_2};
  color: black;
  text-decoration: none;
`;
