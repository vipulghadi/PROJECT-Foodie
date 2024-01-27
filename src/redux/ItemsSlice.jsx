//this Slice is to set the all Items to the store
import { createSlice } from "@reduxjs/toolkit";

const ItemsSlice = createSlice({
    name: "items",
    initialState: {
        items: [],

    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload.Items || action.payload.qItems

        }


    },




})

export const { setItems } = ItemsSlice.actions

export default ItemsSlice.reducer