import { PRODUCTS } from "../types";

const initialState = {
  allProducts: [],
  addedToBasketItems: localStorage.getItem("addedItems")
    ? JSON.parse(localStorage.getItem("addedItems"))
    : [],
  addedToFavoritesItems: localStorage.getItem("favoriteItems")
    ? JSON.parse(localStorage.getItem("favoriteItems"))
    : [],
};

export function productsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case PRODUCTS.GET_ALL_PRODUCTS:
      return { ...state, allProducts: payload };
    case PRODUCTS.TOGGLE_ADDED_ITEM:
      return { ...state, addedToBasketItems: payload };
    case PRODUCTS.TOGGLE_LIKED_ITEM:
      return { ...state, addedToFavoritesItems: payload };
    case PRODUCTS.RESET_ADDED_ITEMS:
      return { ...state, addedToBasketItems: payload };
    default:
      return state;
  }
}
