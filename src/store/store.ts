import { configureStore, createSlice } from "@reduxjs/toolkit";
import productsReducer, { productsFetch } from "./productsSlice";
import { productsApi } from "./productsApi";
import cartReducer, { getTotals } from "./cartSlice";
import loginReducer from "./LoginSlice";
import signUpReducer from "./signupSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        login: loginReducer,
        signUp: signUpReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware),
});



store.dispatch(productsFetch());


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store

export default store;
