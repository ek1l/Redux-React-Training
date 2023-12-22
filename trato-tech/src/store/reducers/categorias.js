import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasService from '../../services/categorias';

const initialState = [];

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasService.buscar,
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(buscarCategorias.fulfilled, (_, { payload }) => {
        console.log('Categorias carregado.');
        return payload;
      })
      .addCase(buscarCategorias.pending, (_, { payload }) => {
        console.log('Carregando categorias');
      })
      .addCase(buscarCategorias.rejected, (_, { payload }) => {
        console.log('Buscar  categorias rejeitada');
      });
  },
});

export default categoriasSlice.reducer;
