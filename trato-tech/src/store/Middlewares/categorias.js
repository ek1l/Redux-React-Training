import categoriasService from '../../services/categorias';
import {
  adicionarTodasCategorias,
  adicionarUmaCategoria,
  carregarCategorias,
  carregarUmaCategoria,
} from '../reducers/categorias';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import criarTarefa from './utils/criarTarefa';

export const categoriasListener = createListenerMiddleware();

categoriasListener.startListening({
  actionCreator: carregarCategorias,
  effect: async (action, { dispatch, fork, unsubscribe }) => {
    const resposta = await criarTarefa({
      fork,
      dispatch,
      action: adicionarTodasCategorias,
      busca: categoriasService.buscar,
      textoCarregando: 'Carregando as categorias',
      textoSucesso: 'Categorias carregadas com sucesso!',
      textoErro: 'Falha ao chamar API!',
    });
    if (resposta.status === 'ok') {
      unsubscribe();
    }
  },
});

categoriasListener.startListening({
  actionCreator: carregarUmaCategoria,
  effect: async (action, { fork, dispatch, getState, unsubscribe }) => {
    const { categorias } = getState();
    const nomeCategoria = action.payload;
    const categoriaCarregada = categorias.some(
      (categoria) => categoria.id === nomeCategoria,
    );
    if (categoriaCarregada) return;
    if (categorias.length === 5) return unsubscribe();
    await criarTarefa({
      fork,
      dispatch,
      action: adicionarUmaCategoria,
      busca: () => categoriasService.buscarUmaCategoria(nomeCategoria),
      textoCarregando: `Carregando as categoria ${nomeCategoria}`,
      textoSucesso: `Categoria ${nomeCategoria} com sucesso!`,
      textoErro: `Erro na busca da categoria ${nomeCategoria}`,
    });
  },
});
