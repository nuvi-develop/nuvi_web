import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { format } from "date-fns";
import styled from "styled-components";

import { dashboardColor } from "theme/colors";
import { BorderedBox } from "components/Styled";

const leftOvers = [
  { date: new Date(), leftOver: 30 },
  { date: new Date(), leftOver: 90 },
  { date: new Date(), leftOver: 80 },
  { date: new Date(), leftOver: 120 },
  { date: new Date(), leftOver: 20 }
];

const formatedLeftOvers = leftOvers.map(({ date, leftOver }) => {
  const formatedDate = format(date, "dd");
  return { date: formatedDate, leftOver };
});

export default function LeftOverGraph() {
  return (
    <StyledBorderedBox>
      <ResponsiveContainer width="99%" height={150}>
        <BarChart data={formatedLeftOvers} width={200} height={100}>
          <defs>
            <linearGradient id="smallLeftOver" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={dashboardColor.light_green}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={dashboardColor.light_green}
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="bigLeftOver" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={dashboardColor.red}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={dashboardColor.red}
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 18 }}
          />
          <YAxis axisLine={false} hide />
          <Tooltip />

          <Bar dataKey="leftOver" barSize={10}>
            {formatedLeftOvers.map(({ leftOver }, index) => {
              const fillId =
                leftOver > 100 ? "url(#bigLeftOver)" : "url(#smallLeftOver)";
              return <Cell key={`cell-${index}`} fill={fillId} />;
            })}
          </Bar>
          <ReferenceLine
            y={100}
            stroke="red"
            label={{ value: "100", position: "insideTopLeft" }}
            isFront={true}
          />
        </BarChart>
      </ResponsiveContainer>
    </StyledBorderedBox>
  );
}

const StyledBorderedBox = styled(BorderedBox)`
  width: 90%;
  margin: 0;
  border-radius: 0;
`;
