import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProduct } from "../features/products/productsSlice";
import { fetchProducts } from "./../features/products/productsSlice";

function Filter() {
  const [searchkey, setSearchKey] = useState("");
  const [sort, setSort] = useState("popular");
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();

  const datas = { searchkey, sort, category };

  function handleFilterFromCart(datas) {
    dispatch(filterProduct(datas));
  }

  return (
    <div className="container-fluid">
      <div className="row mt-4 mb-2">
        <div className="col-sm-3 mt-2">
          <div className="form-group mx-sm-3 mb-2">
            <input
              value={searchkey}
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="col-sm-3 mt-2 ">
          <select
            className="form-control"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value="popular">Popular</option>
            <option value="lth">Low to high</option>
            <option value="htl">High to low</option>
          </select>
        </div>

        <div className="col-sm-2 mt-2">
          <select
            className="form-control"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="electronics">ELectronics</option>
            <option value="wears">Wears</option>
            <option value="sport">Sports</option>
          </select>
        </div>

        <div className="col-sm-2 mt-2">
          <button
            className="btn btn-success"
            onClick={() => handleFilterFromCart(datas)}
          >
            Filter
          </button>
        </div>
        <div className="col-md-2 mt-2 mb-1">
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => dispatch(fetchProducts())}
          >
            Show All
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Filter;
