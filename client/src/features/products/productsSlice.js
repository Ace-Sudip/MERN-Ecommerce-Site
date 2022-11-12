import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await axios
      .get("/api/products/getallproducts")
      .then((response) => response.data);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;

      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    filterProduct: (state, action) => {
      let filteredproduct;
      if (!action.payload.searchkey) {
        filteredproduct = state.products;
      } else {
        filteredproduct = state.products.filter((product) => {
          return product.name.toLowerCase().includes(action.payload.searchkey);
        });
      }
      if (!action.payload.searchkey === "") {
        filteredproduct = action.payload;
      }

      if (action.payload.sort !== "popular") {
        if (action.payload.sort === "htl") {
          filteredproduct = state.products.sort((a, b) => {
            return b.price - a.price;
          });
        } else {
          filteredproduct = state.products.sort((a, b) => {
            return a.price - b.price;
          });
        }
      }

      if (action.payload.category !== "all") {
        filteredproduct = state.products.filter((product) => {
          return product.category
            .toLowerCase()
            .includes(action.payload.category);
        });
      }

      state.products = filteredproduct;
    },
  },
});

export default productsSlice.reducer;
export const { filterProduct } = productsSlice.actions;
