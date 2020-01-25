import React from "react";

export default function ProductList({ products }) {
  return <h1>Products overview {products && products.length}</h1>;
}
