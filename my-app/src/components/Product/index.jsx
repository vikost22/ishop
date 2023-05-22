import Button from "../Button";
import PropTypes from "prop-types";
import "./product.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartModalContent,
  removeFromCartModalContent,
  removeFromFavoriteModalContent,
  toggleModalStatus,
} from "../../redux/actions/modal";
import { toggleLikedItem } from "../../redux/actions/products";

export default function Product(props) {
  const {imageUrl, title, code, color, price} = props.product;
  const dispatch = useDispatch();

  const addedItems = useSelector((state) => state.products.addedToBasketItems);
  const likedItems = useSelector(
    (state) => state.products.addedToFavoritesItems
  );

  return (
    <li
      className="position-relative card me-3 mb-3"
      style={{ maxWidth: 250 + "px" }}
    >
      <div className="card-body">
        <img src={imageUrl} alt="" width={"230"} />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Vendor code: {code}</p>
        <p className="card-text">Color: {color}</p>
        <p className="card-text">Price: {price}</p>
        <Button
          btnStyle={"btn-dark"}
          text={props.buttonText}
          onButtonClick={() => {
            switch (props.type) {
              case "ALL_PRODUCTS":
                dispatch(addToCartModalContent(dispatch, props.product));
                break;

              case "FAV_PRODUCTS":
                dispatch(removeFromFavoriteModalContent(dispatch, props.product));
                break;

              default:
                break;
            }
            dispatch(toggleModalStatus());
          }}
          isDisabled={
            (addedItems.find((item) => item.code === code) &&
            props.type === "ALL_PRODUCTS")
              ? true
              : false
          }
        />
        {props.favIcon ? (
          <img
            src={
              likedItems.find((item) => item.code === code)
                ? "/images/favorite-active.png"
                : "/images/favorite.png"
            }
            className="favorite-icon"
            width={25}
            height={25}
            alt=""
            onClick={() => {
              dispatch(toggleLikedItem(props.product));
            }}
          />
        ) : null}
      </div>
    </li>
  );
}

Product.propTypes = {
  title: PropTypes.string,
  prise: PropTypes.string,
  imageUrl: PropTypes.string,
  color: PropTypes.string,
  code: PropTypes.string,
  favIcon: PropTypes.bool,
  type: PropTypes.string,
};

Product.defaultProps = {
  favIcon: true,
  type: "ALL_PRODUCTS",
};
