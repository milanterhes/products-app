import React from "react";
import styled from "@emotion/styled";
import ProductOverview from "./ProductOverview";
import Grid from "./Grid/Grid";

const Div = styled.div`
  top: 10vh;
  left: 0;
  padding: 0 10% 0 10%;
  h1 {
    text-align: center;
  }
`;

export default function ProductList({ products }) {
  if (products.length) {
    return (
      <Div>
        <h1>Overview</h1>
        <Grid>
          {products.map(({ id, title, price, images }) => (
            <ProductOverview
              key={id}
              title={title}
              price={price}
              thumb={images[0].thumb}
              id={id}
            />
          ))}
        </Grid>
      </Div>
    );
  } else {
    return (
      <Div>
        <h1>Loading...</h1>
      </Div>
    );
  }
}
