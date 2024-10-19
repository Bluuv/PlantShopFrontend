import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    photo: string;
    quantity: number;
    cartQuantity: number;
}

export interface ProductState {
    items: Product[];
    status: string;
    error: string | null;
}

const initialState: ProductState = {
    items: [],
    status: "",
    error: null
}


export const productsFetch = createAsyncThunk(
    "products/productsFetch", 
    async() => {
            const response = await axios.get('http://localhost:8080/shop');
            return response?.data;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state) => {
                state.status = "pending";
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.items = action.payload;
            })
            .addCase(productsFetch.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.payload as string;
            })
    },
})

export default productsSlice.reducer

