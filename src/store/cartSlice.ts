import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "./productsSlice";


interface ProductInCartDTO {
    product: Product;
    quantity: number;
}

export interface CartState {
    cartItems: ProductInCartDTO[]; 
    cartTotalQuantity: number;
    cartTotalAmount: number;
}

const initialState: CartState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
};


export const fetchCart = createAsyncThunk(
    "cart/fetchCart",
    async () => {
        const response = await axios.get('http://localhost:8080/cart');
        return response.data;  
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.product.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            } else {
                const tempProduct = { product: action.payload, quantity: 1 };
                state.cartItems.push(tempProduct);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            cartSlice.caseReducers.getTotals(state);
        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.product.id !== action.payload.id
            );
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            cartSlice.caseReducers.getTotals(state);
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.product.id === action.payload.id
            );

            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
            } else if (state.cartItems[itemIndex].quantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.product.id !== action.payload.id
                );
                state.cartItems = nextCartItems;
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            cartSlice.caseReducers.getTotals(state);
        },
        clearCart(state) {
            state.cartItems = [];
            state.cartTotalQuantity = 0; 
            state.cartTotalAmount = 0; 
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            cartSlice.caseReducers.getTotals(state); 
        },
        getTotals(state) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price } = cartItem.product;
                    const itemTotal = price * cartItem.quantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartItem.quantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0
                }
            );
            total = parseFloat(total.toFixed(2)); 
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    },
    extraReducers: (builder) => {
        
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.cartItems = action.payload;
            cartSlice.caseReducers.getTotals(state);  
        });
    }
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;

export default cartSlice.reducer;
