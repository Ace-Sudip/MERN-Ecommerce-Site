import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "./productsSlice";
import Product from "./../../components/Product";

function ProductsView() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row mt-3  ">
        {products.loading && (
          <div>
            <div classNamw="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        )}
        {!products.loading && products.error ? (
          <div>Error: {products.error}</div>
        ) : null}
        {!products.loading && products.products.length
          ? products.products.map((product) => {
              return (
                <div className="col-md-4   mb-2 mt-2 " key={product._id}>
                  <div className="card">
                    <Product product={product} />
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default ProductsView;
