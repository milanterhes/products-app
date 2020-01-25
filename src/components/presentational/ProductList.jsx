import React from "react";
import styled from "@emotion/styled";
import ProductOverview from "./ProductOverview";

const Div = styled.div`
  top: 10vh;
  left: 0;
  padding: 0 10% 0 10%;
  h1 {
    text-align: center;
  }
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  max-width: 100%;
`;

export default function ProductList({ products }) {
  return (
    <Div>
      <h1>Overview</h1>
      <Grid>
        {products.map(({ title, price, images }) => (
          <ProductOverview
            title={title}
            price={price}
            thumb={images[0].thumb}
          />
        ))}
        {products.map(({ title, price, images }) => (
          <ProductOverview
            title={title}
            price={price}
            thumb={images[0].thumb}
          />
        ))}
      </Grid>
    </Div>
  );
}
