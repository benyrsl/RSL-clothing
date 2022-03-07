import ShopActionTypes from "./shop.types";

const init_state = {
  collections: null,
};

const shopReducer = (state = init_state, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
