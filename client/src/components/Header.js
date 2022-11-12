import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cartTotal } from "../features/cart/cartSlice";

function Header() {
  const cart = useSelector((state) => state.cart);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartTotal());
  }, [cart, dispatch]);

  return (
    <nav className="navbar navbar-expand navbar-light bg-info w-100">
      <Link to="/" className="navbar-brand">
        <p className="h5">Online Store</p>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto font-weight-bold">
          <li className="nav-item  ">
            <Link to="/cart" className="nav-link mr-2">
              <span>
                {cartTotalQuantity}
                <AiOutlineShoppingCart size="30px" />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
