import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasService from '../../services/categorias';
import { createStandaloneToast } from '@chakra-ui/toast';
import { resetarCarrinho } from './carrinho';
const { ToastContainer, toast } = createStandaloneToast();
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
        toast({
          title: 'Sucesso!',
          description: 'Categorias carregadas com sucesso!',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        return payload;
      })
      .addCase(buscarCategorias.pending, (_, { payload }) => {
        toast({
          title: 'Carregando...!',
          description: 'Categorias carregadas com sucesso!',
          status: 'loading',
          duration: 2000,
          isClosable: true,
        });
      })
      .addCase(buscarCategorias.rejected, (_, { payload }) => {
        toast({
          title: 'Algo falhou!',
          description: 'Falha ao chamar API!',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      })
      .addCase(resetarCarrinho.type, () => {
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

export default categoriasSlice.reducer;
