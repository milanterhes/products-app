import actionTypes from "./types";

const setProducts = products => ({
  type: actionTypes.SET_PRODUCTS,
  payload: {
    products
  }
});

export { setProducts };
