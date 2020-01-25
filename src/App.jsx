import React from "react";
import ProductListContainer from "./components/container/ProductListContainer";
import ProductDetails from "./components/presentational/ProductDetails";
import Nav from "./components/presentational/Nav";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <ProductListContainer />
          </Route>
          <Route path="/:id" component={ProductDetails} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
