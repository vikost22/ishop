import "./checkoutform.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { resetAddedProducts } from "../../redux/actions/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkmark from "../Checkmark";

export default function CheckoutForm() {
  const [checkout, setCheckout] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const purchasedProducts = useSelector((state) => {
    return state.products.addedToBasketItems.map((product) => {
      return {
        name: product.title,
        color: product.color,
        code: product.code,
        price: product.price,
      };
    });
  });
  const formik = useFormik({
    initialValues: {
      userEmail: "",
      userPhone: "+380",
      userName: "",
      shippingAddress: "",
    },
    validationSchema: Yup.object({
      userEmail: Yup.string()
        .email("You must enter your e-mail")
        .required("This field is required"),
      userName: Yup.string()
        .min(2, "You must enter your real name")
        .required("This field is required"),
      userPhone: Yup.string()
        .length(13, "You must enter your real number")
        .required("This field is required"),
      shippingAddress: Yup.string()
        .min(10, "You must enter shipping address")
        .required("This field is required"),
    }),
    onSubmit: (value) => {
      setCheckoutLoading(true);
      setTimeout(() => {
        setCheckout(true);
        setTimeout(() => {
          console.group("User info");
          console.table(value);
          console.groupEnd();
          console.group("Purchased products");
          console.table(purchasedProducts);
          dispatch(resetAddedProducts());
          navigate("/");
        }, 1000);
      }, 1500);
    },
  });

  return (
    <>
      <form className="checkout-form" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userEmail" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="userEmail"
            name="userEmail"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userEmail}
            placeholder="your@email"
          />
          <div id="emailError" className="form-text text-danger">
            {formik.touched.userEmail && formik.errors.userEmail
              ? formik.errors.userEmail
              : null}
          </div>
          <label htmlFor="userPhone" className="form-label">
            First- and lastname
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userName}
            placeholder="Firstname lastname"
          />
          <div id="userNameError" className="form-text text-danger">
            {formik.touched.userName && formik.errors.userName
              ? formik.errors.userName
              : null}
          </div>
          <label htmlFor="userPhone" className="form-label">
            Phone number
          </label>
          <input
            type="tel"
            className="form-control"
            id="userPhone"
            name="userPhone"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userPhone}
          />
          <div id="phoneError" className="form-text text-danger">
            {formik.touched.userPhone && formik.errors.userPhone
              ? formik.errors.userPhone
              : null}
          </div>

          <label htmlFor="shippingAddress" className="form-label">
            Shipping Address
          </label>
          <input
            type="text"
            className="form-control"
            id="shippingAddress"
            name="shippingAddress"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.shippingAddress}
            placeholder="Sity street hausenumber"
          />
          <div id="addressError" className="form-text text-danger">
            {formik.touched.shippingAddress && formik.errors.shippingAddress
              ? formik.errors.shippingAddress
              : null}
          </div>
        </div>
        <button type="submit" className="btn btn-outline-dark">
          Checkout
        </button>
      </form>
      <Checkmark complate={checkout} backShow={checkoutLoading} />
    </>
  );
}
