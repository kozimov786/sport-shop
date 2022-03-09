import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    gridShow: true,
    listShow: false,
    menuShow: false,
    tabToggle: 1,
    cartItems: [],
    quantity: 1,
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    GridShow(state) {
      state.gridShow = true
      state.listShow = false
    },
    ListShow(state) {
      state.listShow = true
      state.gridShow = false
    },
    ShowMenu(state) {
      state.menuShow = !state.menuShow
    },
    TabsToggle(state, action) {
      state.tabToggle = action.payload
    },
    Increment(state, action) {
      state.quantity++
      state.totalPrice = action.payload
    },
    Decriment(state, action) {
      state.quantity--
    },
    AddCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          cost: newItem.cost,
          totalPrice: newItem.price,
          name: newItem.name,
          img: newItem.img
        })
      } else {
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem === 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== id)
      } else {
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
      state.totalQuantity--;
    }
  }
})

export const uiActions = uiSlice.actions

export default uiSlice.reducer;