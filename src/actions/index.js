import { SET_PRODUCTS } from "./types";

const setProducts = products => ({
  type: SET_PRODUCTS,
  payload: {
    products
  }
});

export default {
  setProducts
};
