import { combineReducers } from "redux";
import { modalreducer as modal } from "./reducers/modalReducer";
import { productsReducer as products } from "./reducers/productsReducer";

export const rootReducer = combineReducers({modal, products});