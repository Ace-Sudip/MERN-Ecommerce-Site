import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./productSlice";
import { useParams } from "react-router-dom";
import { addToCart } from "../cart/cartSlice";

function ProductView() {
  const { product } = useSelector((state) => state.product);

  const params = useParams();
  const dispatch = useDispatch();
  const productid = params.productid;

  useEffect(() => {
    dispatch(fetchProduct({ productid }));
  }, [productid, dispatch]);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  return (
    <div className="container-fluid">
      {product.loading && <div classNamw="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
</div>}
      {!product.loading && product.error ? (
        <div>Error: {product.error}</div>
      ) : null}
      {!product.loading ? (
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <p className="h4">{product.name}</p>
              <hr />
              <img
                src={product.image}
                className="img-fluid mt-3"
                alt={product.name}
              />
              <p className="h6 mt-2">Description: {product.description}</p>
            </div>
          </div>

          <div className="col-md-6 mt-3 text-left">
            <div className="m-2 shadow p-3 mb-5 bg-white rounded">
              <p className="h5 font-weight-bold">Price :Rs. {product.price}</p>

              <hr />

              <button
                className="  btn m-2 btn-info"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProductView;
