import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";

export function Favorite() {
  const likedItems = useSelector(state=>state.products.addedToFavoritesItems);
    
  return (
    <>
      <div className="container-lg">
        <h1>Favorite</h1>
      </div>
      <ProductList
        products={likedItems}
        buttonText="Remove from favorite"
        type={"FAV_PRODUCTS"}
        favIcon={false}
      />
    </>
  );
}
