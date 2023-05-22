import Button from "../../components/Button";
import { MODAL } from "../types";
import { toggleAddedItem, toggleLikedItem } from "./products";
import BasketList from "../../components/BasketList";

export function toggleModalStatus() {
  return { type: MODAL.TOGGLE_MODAL };
}
export function addToCartModalContent(dispatch, product) {
  return {
    type: MODAL.SET_CONTENT,
    payload: {
      modalTitle: "Do you want to add this item to your shopping cart?",
      modalText: "Click OK to continue",
      modalActions: [
        <Button
          key={1}
          btnStyle={"btn-success"}
          text={"Ok"}
          onButtonClick={() => {
            dispatch(toggleAddedItem(product));
            dispatch(toggleModalStatus());
          }}
        />,
        <Button
          key={2}
          btnStyle={"btn-outline-danger"}
          text={"Cancel"}
          onButtonClick={() => {
            dispatch(toggleModalStatus());
          }}
        />,
      ],
    },
  };
}

export function removeFromCartModalContent(dispatch, product) {
  return {
    type: MODAL.SET_CONTENT,
    payload: {
      modalTitle: "Do you want to remove this item from your shopping cart?",
      modalText: "Click OK to continue",
      modalActions: [
        <Button
          key={1}
          btnStyle={"btn-success"}
          text={"Ok"}
          onButtonClick={() => {
            dispatch(toggleAddedItem(product));
            dispatch(toggleModalStatus());
          }}
        />,
        <Button
          key={2}
          btnStyle={"btn-outline-danger"}
          text={"Cancel"}
          onButtonClick={() => {
            dispatch(toggleModalStatus());
          }}
        />,
      ],
    },
  };
}

export function removeFromFavoriteModalContent(dispatch, product) {
  return {
    type: MODAL.SET_CONTENT,
    payload: {
      modalTitle: "Do you want to remove this item from your favorite list?",
      modalText: "Click OK to continue",
      modalActions: [
        <Button
          key={1}
          btnStyle={"btn-success"}
          text={"Ok"}
          onButtonClick={() => {
            dispatch(toggleLikedItem(product));
            dispatch(toggleModalStatus());
          }}
        />,
        <Button
          key={2}
          btnStyle={"btn-outline-danger"}
          text={"Cancel"}
          onButtonClick={() => {
            dispatch(toggleModalStatus());
          }}
        />,
      ],
    },
  };
}

export function basketContent(navigate, dispatch) {
  return {
    type: MODAL.SET_CONTENT,
    payload: {
      modalTitle: "Shopping cart",
      modalText: <BasketList />,
      modalActions: [
        <Button
          key={1}
          btnStyle={"btn-success"}
          text={`Proceed to checkout`}
          onButtonClick={() => {
            navigate("/checkout");
            dispatch(toggleModalStatus());
          }}
        />,
      ],
      modalCloseBtn: true,
    },
  };
}
