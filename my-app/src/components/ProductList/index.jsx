import PropTypes from "prop-types";
import Product from "../Product";

export default function ProductList(props) {
  return (
    <section>
      <div className="container-lg mt-3">
        <ul className="d-flex flex-wrap">
          {props.products && props.products.length >0 ? (
            props.products.map((product) => {
              return (
                <Product
                  key={product.code}
                  product={product}
                  buttonText={props.buttonText}
                  type={props.type}
                  favIcon={props.favIcon}
                />
              );
            })
          ) : (
            <h2>Items not added</h2>
          )}
        </ul>
      </div>
    </section>
  );
}

ProductList.propTypes = {
  addItems: PropTypes.func,
  closeModal: PropTypes.func,
  likeItem: PropTypes.func,
  modalChange: PropTypes.func,
};
