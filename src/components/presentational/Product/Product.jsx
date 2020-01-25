import styled from "@emotion/styled";

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

export { LearnMoreButton, ProductTitle, ProductDetails, ArrowRight };
