import { createSlice } from "@reduxjs/toolkit";


// const addTotheCart = (state, action) => {
//     const itemInCart = state.cart.find((item) => item.id === action.payload.id)
//     if (itemInCart) {
//         itemInCart.quantity++;
//     } else {
//         state.cart.push({ ...action.payload, quantity: 1 })
//     }
// }

// const incrementtheQuantity = (state, action) => {
//     const item = state.cart.find((item) => item.id === action.payload);
//     item.quantity++;
// }

// const decrementtheQuantity = (state, action) => {
//     const item = state.cart.find((item) => item.id === action.payload);
//     if (item.quantity === 1) {
//         item.quantity = 1;
//     } else {
//         item.quantity--;
//     }
// }

// const removetheItem = (state, action) => {
//     const removeItem = state.cart.filter(((item) => item.id !== action.payload));
//     state.cart = removeItem;
// }

const initialState = {
    cart: [],
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id)
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter(((item) => item.id !== action.payload));
            state.cart = removeItem;
        },
    },
})

export const cartReducer = cartSlice.reducer;

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
} = cartSlice.actions;