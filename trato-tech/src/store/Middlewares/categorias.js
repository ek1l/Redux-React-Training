import categoriasService from '../../services/categorias';
import {
  adicionarTodasCategorias,
  carregarCategorias,
  carregarUmaCategoria,
} from '../reducers/categorias';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { createStandaloneToast } from '@chakra-ui/toast';
import criarTarefa from './utils/criarTarefa';

const { toast } = createStandaloneToast();
export const listener = createListenerMiddleware();

listener.startListening({
  actionCreator: carregarCategorias,
  effect: async (action, { dispatch, fork, unsubscribe }) => {
    await criarTarefa({
      fork,
      dispatch,
      action: adicionarTodasCategorias,
      busca: categoriasService.buscar,
      textoCarregando: 'Carregando as categorias',
      textoSucesso: 'Categorias carregadas com sucesso!',
      textoErro: 'Falha ao chamar API!',
    });
    unsubscribe();
  },
});

listener.startListening({
  actionCreator: carregarUmaCategoria,
  effect: async () => {
    console.log('Carregar apenas uma categoria');
  },
});
