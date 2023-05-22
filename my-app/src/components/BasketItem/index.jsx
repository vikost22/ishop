import { useLocation, useNavigate } from "react-router-dom";
import { toggleModalStatus } from "../../redux/actions/modal";
import { toggleAddedItem } from "../../redux/actions/products";
import "./basketItem.scss";
import { useDispatch, useSelector } from "react-redux";

export default function BasketItem(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {imageUrl, title, code, color, price} = props.product;

  const addedItemsCount = useSelector(
    (state) => state.products.addedToBasketItems.length
  );
  function onTrashClick() {
    dispatch(toggleAddedItem(props.product));
    if (addedItemsCount <= 1 && location.pathname !== "/checkout") {
      dispatch(toggleModalStatus());
    }
    if (addedItemsCount <= 1 &&  location.pathname === "/checkout") navigate("/");
  }
  return (
    <li className="basket-item">
      <img src={imageUrl} alt="Item foto" width={170} />
      <div className="basket-item__info">
        <h2 className="basket-item__title">{title}</h2>
        <p className="basket-item__color">{color}</p>
        <p className="basket-item__price">{price}</p>
      </div>
      <button className="trash-btn" onClick={onTrashClick}>
        <img
          src={
            location.pathname !== "/checkout"
              ? "/images/trash.png"
              : "/images/trash--black.png"
          }
          alt="trash"
          width={30}
        />
      </button>
    </li>
  );
}
