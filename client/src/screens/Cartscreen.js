import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  cartTotal,
  clearCart,
  decreaseCart,
  removeFromCart,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

function Cartscreen() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartTotal());
  }, [cart, dispatch]);

  function handleRemoveFromCart(cartItem) {
    dispatch(removeFromCart(cartItem));
  }

  function handleDecreaseCart(cartItem) {
    dispatch(decreaseCart(cartItem));
  }
  function handleIncreaseCart(cartItem) {
    dispatch(addToCart(cartItem));
  }
  function handleClearCart() {
    dispatch(clearCart());
  }
  return (
    <div className="container-fluid">
      {cart.cartItems.length === 0 ? (
        <div>
          <h1>Cart is empty.</h1>
        </div>
      ) : (
        <div>
          <div className="row mt-4">
            <div className="col-3">
              <span>Products</span>
            </div>
            <div className="col-3">
              <span>Price</span>
            </div>
            <div className="col-3">
              <span>Quantity</span>
            </div>
            <div className="col-3">
              <span>Total</span>
            </div>
          </div>
          <hr />

          {cart.cartItems?.map((cartItem) => (
            <div>
              <div className="row" key={cartItem._id}>
                <div className="col-3">
                  <p className="h6 mt-2 ">{cartItem.name}</p>
                  <img
                    height="150px"
                    width="150px"
                    src={cartItem.image}
                    alt={cartItem.name}
                  />
                  <button
                    className="btn btn-sm btn-danger mt-2 mb-1 ml-1"
                    onClick={() => handleRemoveFromCart(cartItem)}
                  >
                    Remove
                  </button>
                </div>
                <div className="col-3">Rs. {cartItem.price}</div>
                <div className="col-3">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleDecreaseCart(cartItem)}
                  >
                    -
                  </button>
                  {cartItem.cartQuantity}
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleIncreaseCart(cartItem)}
                  >
                    +
                  </button>
                </div>
                <div className="col-3">
                  Rs. {cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}

      <hr />
      <div className="row mt-4">
        <div className="col-6">
          {" "}
          <button
            className="btn btn-sm btn-dark"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        </div>

        <div className="col-6">
          <p className="h5">SubTotal: Rs. {cart.cartTotalAmount}</p>
          <Link to="/">
            <button className="btn btn-sm btn-info mb-5">Shop More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cartscreen;
