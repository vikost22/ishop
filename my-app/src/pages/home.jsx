import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";

export function Home(props) {
  const products = useSelector((state) => state.products.allProducts); 

  return (
    <>
      <div className="container-lg">
        <h1>All Products</h1>
      </div>
      <ProductList
        products={products}
        buttonText="Buy"
      />
    </>
  );
}
