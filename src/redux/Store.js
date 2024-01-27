//this is our redux store
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ItemsSlice from "./ItemsSlice";
const store = configureStore({
    reducer: {
        cartQueries: CartSlice,
        itemsQueries: ItemsSlice,
    }

})
export default store