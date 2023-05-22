import Header from "./components/Header";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux/asyncActions/products";
import { bodyNotScrolling } from "./additionalFunction";
import AllRoutes from "./routes";

function App() {
  const dispatch = useDispatch();
  const {
    modalContent: { modalTitle, modalText, modalActions, modalCloseBtn },
    modalIsOpen,
  } = useSelector((state) => state.modal);

  const { addedToBasketItems, addedToFavoritesItems } = useSelector(
    (state) => state.products
  );
  
  useEffect(() => {
    bodyNotScrolling()
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    bodyNotScrolling()
  }, [modalIsOpen]);
  return (
    <>
      <Header
        likedItems={addedToFavoritesItems}
        addedItems={addedToBasketItems}
      />
      <AllRoutes/>
      <Modal
        title={modalTitle}
        content={modalText}
        closeButton={modalCloseBtn}
        actions={modalActions}
        modalIsOpen={modalIsOpen}
      />
    </>
  );
}

export default App;
