import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        AddItem: (state, action) => {
            const item = action.payload;
            const existing = state.find(i => i.id === item.id);
            if (existing) {
                existing.qty += 1;
            } else {
                state.push({ ...item, qty: 1 });
            }
        },
        DeleteItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        IncreaseQty: (state, action) => {
            const item = state.find(i => i.id === action.payload);
            if (item) item.qty += 1;
        },
        DecreaseQty: (state, action) => {
            const item = state.find(i => i.id === action.payload);
            if (item && item.qty > 1) item.qty -= 1;
        }
    }
})

export const { AddItem, DeleteItem, IncreaseQty, DecreaseQty } = cartSlice.actions;

export default cartSlice.reducer