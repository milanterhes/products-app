import React from "react";
import styled from "@emotion/styled";
import { useLocation, Link } from "react-router-dom";

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
  position: relative;
`;

const BackButton = styled.div`
  width: 100px;
  height: 50px;
  text-align: center;
  left: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 5px;
  transition: 0.6s;
  &:hover {
    box-shadow: 2px 2px white;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export default function Nav() {
  let location = useLocation();
  console.log(location);
  return (
    <NavBG>
      {location.pathname !== "/" && (
        <BackButton>
          <Link to="/">Back</Link>
        </BackButton>
      )}
      Products
    </NavBG>
  );
}
