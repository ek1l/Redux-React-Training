import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import itensService from '../../services/itens';

export const buscarItens = createAsyncThunk(
  'itens/buscar',
  itensService.buscar,
);

const itensSlice = createSlice({
  name: 'Itens',
  initialState: [],
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state.map((item) => {
        if (item.id === payload) item.favorito = !item.favorito;
      });
    },
    cadastrarItem: (state, { payload }) => {
      state.push({ ...payload, id: uuid() });
    },
    mudarItem: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload.id);
      Object.assign(state[index], payload.item);
    },
    deletarItem: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload);
      state.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(buscarItens.fulfilled, (_, { payload }) => {
        console.log('Itens Carregados');
        return payload;
      })
      .addCase(buscarItens.pending, (_, { payload }) => {
        console.log('Carregando Itens');
      })
      .addCase(buscarItens.rejected, (_, { payload }) => {
        console.log('Buscar itens foi  rejeitado');
      });
  },
});

export const { mudarFavorito, cadastrarItem, mudarItem, deletarItem } =
  itensSlice.actions;

export default itensSlice.reducer;
