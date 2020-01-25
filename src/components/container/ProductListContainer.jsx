import React from "react";
import ProductList from "../presentational/ProductList";
import { useSelector } from "react-redux";

export default function ProductListContainer() {
  const products = useSelector(state => state.products);
  return <ProductList products={products} />;
}
