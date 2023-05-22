import BasketItem from "../BasketItem";
import { useSelector } from "react-redux";
import "./basket.scss";

export default function BasketList() {
  const addedItems = useSelector((state) => state.products.addedToBasketItems);

  return (
    <ul className="basket-list">
      {addedItems.length > 0 ? addedItems.map((product) => {
        return <BasketItem product={product} key={product.code}/>;
      }):"No added items"}
    </ul>
  );
}
