import { getProducts } from "../actions/products";

export function fetchProducts() {
  return async (dispatch) => {
    const data = await fetch("items.json")
      .then((res) => res.json())
      .then((data) => data);
    dispatch(getProducts(data));
  };
}
