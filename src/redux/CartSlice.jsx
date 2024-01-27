//this Slice define all the action and reducer function related to cart
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        showCart: false,
        itemCount: 0,
        totalCost: 0
    },
    reducers: {
        addToCart: (state, action) => {
            let isPresent = false
            state.cart.forEach((item) => {

                if (item.id == action.payload.data.id) {
                    isPresent = true
                }
            })
            if (!isPresent) {
                state.itemCount += 1;
                state.cart.push({...action.payload.data, qty: 1 });
                state.totalCost += (action.payload.data.price)
                localStorage.setItem("cart", JSON.stringify(state.cart))
                localStorage.setItem("itemCount", JSON.stringify(state.itemCount))
                localStorage.setItem("totalCost", JSON.stringify(state.totalCost))

            }


        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => {
                if (item.id == action.payload.id) {
                    state.totalCost -= (item.price * item.qty)
                } else {
                    return item
                }

            })
            state.itemCount -= 1
            localStorage.setItem("cart", JSON.stringify(state.cart))
            localStorage.setItem("itemCount", JSON.stringify(state.itemCount))
            localStorage.setItem("totalCost", JSON.stringify(state.totalCost))
        },

        toggleCart: (state, action) => {
            state.showCart = (!state.showCart)

        },
        increaseQty: (state, action) => {
            state.cart.filter((item) => {
                if (item.id == action.payload.id) {

                    item.qty += 1
                    state.totalCost += (item.price)
                }
                return item
            })
            localStorage.setItem("cart", JSON.stringify(state.cart))
            localStorage.setItem("totalCost", JSON.stringify(state.totalCost))

        },
        decreaseQty: (state, action) => {
            state.cart.filter((item) => {
                if (item.id == action.payload.id) {
                    if (item.qty > 1) {
                        item.qty -= 1
                        state.totalCost -= (item.price)
                    }

                }
                return item
            })
            localStorage.setItem("cart", JSON.stringify(state.cart))
            localStorage.setItem("totalCost", JSON.stringify(state.totalCost))

        },
        setCart: (state, action) => {

            state.cart = action.payload.cartFromLS_
                // state.cart = [...action.payload.cartFromLS_]

        },
        setTotalItem: (state, action) => {
            state.itemCount = action.payload.item_
        },
        setTotalCost: (state, action) => {
            state.totalCost = action.payload.cost_
        },

        makeCartEmpty: (state, action) => {
            state.cart = []
            state.totalCost = 0
            state.itemCount = 0
            localStorage.setItem("cart", "[]")
            localStorage.setItem("itemCount", "0")
            localStorage.setItem("totalCost", "0")
        },
    }
})

export const { addToCart, removeFromCart, toggleCart, increaseQty, decreaseQty, setCart, setTotalCost, setTotalItem, isCartEmpty, makeCartEmpty } = CartSlice.actions

export default CartSlice.reducer