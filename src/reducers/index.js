import actionTypes from "../actions/types";

const initialState = {
  products: [],
  comments: {
    "1": [
      {
        name: "Milan",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting" +
          "industry. Lorem Ipsum has been the industry's standard dummy text " +
          "ever since the 1500s, when an unknown printer took a galley of type and" +
          " scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." +
          "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages," +
          "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
    ]
  }
};

function productsReducers(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products
      };
    case actionTypes.ADD_COMMENT:
      const comments = { ...state.comments };
      const { name, text, id } = action.payload.comment;

      if (comments.hasOwnProperty(id)) {
        for (let key in comments) {
          if (id === key) {
            comments[id].push({ name, text });
          }
        }
      } else {
        comments[id] = [
          {
            name,
            text
          }
        ];
      }

      return {
        ...state,
        comments
      };
    default:
      return state;
  }
}

export default productsReducers;
