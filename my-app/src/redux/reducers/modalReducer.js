import { MODAL } from "../types";

const initialState = {
  modalContent: {
    modalTitle: "",
    modalText: "",
    modalActions: [],
    modalCloseBtn: true,
  },
  modalIsOpen: false,
};

export function modalreducer(state = initialState, { type, payload }) {
  switch (type) {
    case MODAL.SET_CONTENT:
      return {
        ...state,
        modalContent: payload,
      };
    case MODAL.TOGGLE_MODAL:
      return { ...state, modalIsOpen: !state.modalIsOpen };
    default:
      return state;
  }
}
