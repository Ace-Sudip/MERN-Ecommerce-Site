import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";


function Product({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(product));
  }
  return (
    <div id="hovercart">
      <img
        className="mx-auto  resimg img-fluid mt-2"
        height="350px"
        width="350px"
        src={product.image}
        alt={product.name}
      />

      <p className="h4 card-title  ">{product.name}</p>

      <p className="h5  mt-2">Price: {product.price}</p>
      <button
        onClick={() => handleAddToCart(product)}
        id="shopcart"
        className=" btn btn-md btn-info float-right mb-3"><AiOutlineShoppingCart style={{marginBottom: '3px',marginRight:'2px'}}  size='20px'/>Cart</button>

      <Link to={`product/${product._id}`}>
        <button className=" btn btn-primary mb-2">View More</button>
      </Link>
    </div>
  );
}

export default Product;
