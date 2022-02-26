import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    gridShow: true,
    listShow: false
  },
  reducers: {
    GridShow(state) {
      state.gridShow = true
      state.listShow = false
    },
    ListShow(state) {
      state.listShow = true
      state.gridShow = false
    }
  }
})

export const uiActions = uiSlice.actions

export default uiSlice.reducer;