import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Grid from "./Grid/Grid";
import FourtyColumn from "./Grid/FourtyColumn";
import Gallery from "./Product/Gallery";
import styled from "@emotion/styled";
import CommentsContainer from "../container/CommentsContainer";

const ProductData = styled.div`
  text-align: left;
  height: 100%;
  padding: 0 10px 0 10px;
  hr {
    margin-top: 0;
  }
  h2 {
    margin-bottom: 0;
  }
  div:first-of-type {
    position: relative;
    overflow: auto;
    border-bottom: 1px solid black;
    h2 {
      float: left;
      margin-bottom: 0;
      max-width: 75%;
    }
    b {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
`;

export default function ProductDetails() {
  const { id } = useParams();
  const product = useSelector(state => state.products).find(
    prd => prd.id === parseInt(id)
  );

  if (!product) return <Redirect to="/" />;

  return (
    <Grid>
      <FourtyColumn>
        <Gallery images={product.images} description={product.description} />
      </FourtyColumn>
      <FourtyColumn>
        <ProductData>
          <div>
            <h2>{product.title}</h2>
            <b>€{product.price}</b>
          </div>
          <h4>Description</h4>
          <p>{product.description}</p>
          <h4>Specifications</h4>
          <p>{product.specification}</p>
        </ProductData>
      </FourtyColumn>
      <CommentsContainer id={id} />
    </Grid>
  );
}
