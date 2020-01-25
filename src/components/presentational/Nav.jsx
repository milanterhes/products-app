import React from "react";
import styled from "@emotion/styled";

const NavBG = styled.header`
  top: 0;
  left: 0;
  height: 10vh;
  width: 100%;
  background-color: ${props => props.theme.mainColor};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 200%;
`;

export default function Nav() {
  return <NavBG>Products</NavBG>;
}
