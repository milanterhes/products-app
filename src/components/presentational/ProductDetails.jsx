import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const product = useSelector(state => state.products).find(
    prd => prd.id === parseInt(id)
  );

  console.log("product", id, typeof id);

  if (!product) return <Redirect to="/" />;

  return <h1>{product.title}</h1>;
}
