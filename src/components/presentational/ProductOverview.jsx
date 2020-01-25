import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  border-radius: 5px;
  width: 250px;
  margin-top: 15px;
  position: relative;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 70%;
  object-fit: contain;
  display: block;
`;

const CardBody = styled.div`
  height: 30%;
  margin: 0 5px 5px 5px;
`;

const LearnMoreButton = styled.div`
  float: right;
  vertical-align: baseline;
  display: block;
  background: ${props => props.theme.mainColor};
  border: none;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  height: 25px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductTitle = styled.h4`
  margin: 0;
  cursor: pointer;
`;

const ProductDetails = styled.div`
  position: absolute;
  bottom: 10px;
  width: calc(100% - 10px);
`;

const ArrowRight = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
`;

export default function ProductOverview({ title, price, thumb }) {
  return (
    <Card>
      <Thumbnail src={thumb} alt="Thumbnail" />
      <CardBody>
        <ProductTitle>{title}</ProductTitle>
        <ProductDetails>
          <b>€{price}</b>
          <LearnMoreButton>
            Learn more <ArrowRight />
          </LearnMoreButton>
        </ProductDetails>
      </CardBody>
    </Card>
  );
}
