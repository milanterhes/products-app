import actionTypes from "../actions/types";

const initialState = {
  products: []
};

function productsReducers(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products
      };
    default:
      return state;
  }
}

export default productsReducers;
