import { PRODUCTS } from "../types";

export function getProducts(products) {
  return {
    type: PRODUCTS.GET_ALL_PRODUCTS,
    payload: products,
  };
}
export function resetAddedProducts() {
  localStorage.setItem("addedItems", "[]");
  return {
    type: PRODUCTS.RESET_ADDED_ITEMS,
    payload: [],
  };
}

export function toggleAddedItem(product) {
  const updatedItems = JSON.parse(localStorage.getItem("addedItems"));
  const itemIndex = updatedItems.findIndex((item) => item.code === product.code);

  if (itemIndex === -1) {
    updatedItems.push(product);
  } else {
    updatedItems.splice(itemIndex, 1);
  }
  localStorage.setItem("addedItems", JSON.stringify(updatedItems));
  return {
    type: PRODUCTS.TOGGLE_ADDED_ITEM,
    payload: updatedItems,
  };
}

export function toggleLikedItem(product) {
  const updatedItems = JSON.parse(localStorage.getItem("favoriteItems"));
  const itemIndex = updatedItems.findIndex((item) => item.code === product.code);
  if (itemIndex === -1) {
    updatedItems.push(product);
  } else {
    updatedItems.splice(itemIndex, 1);
  }
  localStorage.setItem("favoriteItems", JSON.stringify(updatedItems));
  return {
    type: PRODUCTS.TOGGLE_LIKED_ITEM,
    payload: updatedItems,
  };
}
