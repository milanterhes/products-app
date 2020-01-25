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

export { Card, Thumbnail, CardBody };
