import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, { payload }) {
      return state.filter((elemento) => elemento.id !== payload.id);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
