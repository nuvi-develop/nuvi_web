import React from "react";
import styled from "styled-components";

import { Title } from "components/Styled";

import LeftOverGraph from "./LeftOverGraph";
import { dashboardColor } from "theme/colors";

const TrashBox = process.env.PUBLIC_URL + "/dashboard/TrashBox.svg";
const LeftOverSticker =
  process.env.PUBLIC_URL + "/dashboard/LeftOverSticker.svg";

export default function LeftOversComp() {
  return (
    <LeftOverContainer>
      <SubContainer>
        <Title>잔반 발생 현황</Title>
        <LeftOverGraph />
      </SubContainer>

      <SubContainer>
        <Title>7월 잔반 비용</Title>
        <LeftOverCost>30,000</LeftOverCost>
        <LeftOverCostUnit>₩</LeftOverCostUnit>
      </SubContainer>
      <LeftOverVolumeContainer>
        <LeftOverTitle>7월 잔반 발생 현황</LeftOverTitle>
        <LeftOverValueUnitContainer>
          <LeftOverVolumeValue>1.5</LeftOverVolumeValue>
          <LeftOVerVolumeUnit>L</LeftOVerVolumeUnit>
        </LeftOverValueUnitContainer>
        <LeftOverStickerImage src={LeftOverSticker} alt="sticker" />
      </LeftOverVolumeContainer>
    </LeftOverContainer>
  );
}

const LeftOverContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

const SubContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const LeftOverCost = styled.div`
  font-weight: 700;
  font-size: 63px;
  color: ${dashboardColor.red};
`;

const LeftOverCostUnit = styled.div`
  font-weight: 500;
  font-size: 34px;
  color: ${dashboardColor.gray_8};
`;

const LeftOverVolumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${TrashBox});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;
`;

const LeftOverTitle = styled.div`
  font-size: 29px;
  font-weight: 300;
  color: white;
`;

const LeftOverValueUnitContainer = styled.div`
  display: flex;
`;

const LeftOverVolumeValue = styled.div`
  font-size: 58px;
  color: white;
  font-weight: 700;
`;

const LeftOVerVolumeUnit = styled.div`
  font-size: 50px;
  color: white;
  font-weight: 100;
`;

const LeftOverStickerImage = styled.img`
  position: absolute;
  width: 200px;
  bottom: -45px;
  left: -105px;
`;
