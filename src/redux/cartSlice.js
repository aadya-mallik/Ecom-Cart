import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : [],
  },
  reducers: {
    addTocart: (state, action) => {
      const { cartObj } = action.payload;
      state.cart.push(cartObj);
      localStorage.setItem("CART",JSON.stringify(state.cart))
    },

    deleteCart: (state, action) => {
    const { id } = action.payload;
    state.cart = state.cart.filter((obj) => obj.id !== id);
    localStorage.setItem("CART", JSON.stringify(state.cart));
},

    changeQty: (state, action) => {
      const {id,finalQty} =action.payload;
       state.cart = state.cart.filter((obj) => {
        if(obj.id==id){
          obj['qty']=finalQty
        }
        return obj
       })
       
    },
  },
});

export const { addTocart, deleteCart, changeQty } = cartSlice.actions;

export default cartSlice.reducer;