import React, { useEffect } from "react";
import ProductList from "../presentational/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../actions";

export default function ProductListContainer() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  console.log("ProductList", products);

  useEffect(() => {
    fetch("http://private-5815fe-recommendationsknip.apiary-mock.com/products")
      .then(response => response.json())
      .then(data => dispatch(setProducts(data)));
  }, [dispatch]);

  return <ProductList products={products} />;
}
