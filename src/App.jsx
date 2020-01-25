import React from "react";
import ProductListContainer from "./components/container/ProductListContainer";
import Nav from "./components/presentational/Nav";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const theme = {
  mainColor: "#ff4500"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            min-height: "100vh";
            max-width: "100vw";
            font-family: "Roboto", sans-serif;
          }
        `}
      />
      <Nav />
      <ProductListContainer />
    </ThemeProvider>
  );
}

export default App;
