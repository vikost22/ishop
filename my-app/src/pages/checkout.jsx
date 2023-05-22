import BasketList from "../components/BasketList";
import CheckoutForm from "../components/CheckoutForm";
import './checkout.scss'
export function Checkout() {
  return (
    <>
      <div className="container-lg">
        <h1>Processing your order</h1>
        <h2>Your order:</h2>
        <div className="checkout-order">
          <BasketList />
        </div>
        <h2>Contact details:</h2>
        <CheckoutForm/>
      </div>
    </>
  );
}
