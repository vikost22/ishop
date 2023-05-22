import PropTypes from "prop-types";
import "./header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { basketContent, toggleModalStatus } from "../../redux/actions/modal";
import { useLocation } from "react-router-dom";

export default function Header(props) {
  const likedCount = props.likedItems.length;
  const addedCount = props.addedItems.length;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  function onCartClick() {
    if (addedCount < 1) return;
    dispatch(basketContent(navigate, dispatch));
    dispatch(toggleModalStatus());
  }
  return (
    <nav className="navbar bg-dark">
      <div className="container-lg">
        <NavLink to={"/"} className="navbar-brand mb-0 h1 text-white">
          IShop
        </NavLink>
        <div className="header__selected-info">
          <NavLink to={"/favorite"} className="header__fav">
            <img
              src="/images/favorite-white.png"
              alt=""
              width={"30"}
              height={"30"}
            />
            <span className={likedCount ? "selected-counter" : "d-none"}>
              {likedCount}
            </span>
          </NavLink>
          {location.pathname !== "/checkout" ? (
            <a onClick={onCartClick} className="header__cart">
              <img src="/images/cart.png" alt="" width={"30"} height={"30"} />
              <span className={addedCount ? "selected-counter" : "d-none"}>
                {addedCount}
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  addedItems: PropTypes.array,
  likedItems: PropTypes.array,
};

Header.defaultProps = {
  addedItems: 0,
  likedItems: 0,
};
