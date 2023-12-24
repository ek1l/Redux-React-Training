import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';
import carrinhoSlice from './reducers/carrinho';
import { categoriasListener } from './Middlewares/categorias';
import buscaSlice from './reducers/busca';
import { itensListener } from './Middlewares/itens';

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
    carrinho: carrinhoSlice,
    busca: buscaSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      categoriasListener.middleware,
      itensListener.middleware,
    ),
});

export default store;
