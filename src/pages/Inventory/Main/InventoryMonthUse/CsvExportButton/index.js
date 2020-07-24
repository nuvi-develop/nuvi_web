import React from "react";
import styled from "styled-components";
import { CSVLink, CSVDownload } from "react-csv";

import Colors from "theme/colors";

const csvData = [
  ["재료명", "", "", "", "", ""],
  ["일자", "단위", "주문량", "사용량", "재고량", "비용(원/단위)"]
];

export default function CsvExportButtonComp({ children }) {
  return <CsvExportButton data={csvData}>{children}</CsvExportButton>;
}

const CsvExportButton = styled(CSVLink)`
  cursor: pointer;
  margin: 3px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${Colors.gray_2};
  color: black;
  text-decoration: none;
`;
