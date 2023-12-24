import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasService from '../../services/categorias';
import { resetarCarrinho } from './carrinho';

const initialState = [];

export const carregarCategorias = createAction('categorias/carregarCategorias');
export const carregarUmaCategoria = createAction(
  'categorias/carregarUmaCategoria',
);
export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasService.buscar,
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    adicionarTodasCategorias: (state, { payload }) => {
      return payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetarCarrinho.type, () => {
      toast({
        title: 'Sucesso!',
        description: 'Compra realizada com sucesso!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    });
  },
});

export const { adicionarTodasCategorias } = categoriasSlice.actions;
export default categoriasSlice.reducer;
