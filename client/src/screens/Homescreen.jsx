import React from "react";
import Filter from "../components/Filter";
import ProductsView from "../features/products/ProductsView";

function Homescreen() {
  return (
    <>
      <Filter />
      <ProductsView />
    </>
  );
}

export default Homescreen;
