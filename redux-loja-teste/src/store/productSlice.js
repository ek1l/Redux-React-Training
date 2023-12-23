import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'Loading',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      // eslint-disable-next-line no-unused-vars
      .addCase(getProducts.pending, (state, action) => {
        state.status = 'Loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'idle';
      })
      // eslint-disable-next-line no-unused-vars
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'Error';
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
  const data = await fetch('https://fakestoreapi.com/products');
  const result = await data.json();
  return result;
});

// export function getProducts() {
//   // eslint-disable-next-line no-unused-vars
//   return async function (dispatch, getState) {
//     dispatch(fetchProducts(result));
//   };
// }
