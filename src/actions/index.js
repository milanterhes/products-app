import actionTypes from "./types";

const setProducts = products => ({
  type: actionTypes.SET_PRODUCTS,
  payload: {
    products
  }
});

const addComment = comment => ({
  type: actionTypes.ADD_COMMENT,
  payload: {
    comment
  }
});

export { setProducts, addComment };
