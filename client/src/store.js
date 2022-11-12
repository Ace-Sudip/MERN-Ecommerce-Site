import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice'
import productReducer from './features/product/productSlice'
// import  addtocartReducer  from './features/cart/cartSlice';
import cartReducer from './features/cart/cartSlice'


const store = configureStore({
 
    reducer: {
     
        products: productsReducer,
        product: productReducer,
        cart: cartReducer,

    },
})

export default store