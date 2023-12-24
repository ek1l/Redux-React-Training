import instance from '../common/config/api';

const categoriasService = {
  buscar: async () => {
    const { data } = await instance.get('/categorias');
    return data;
  },
  buscarUmaCategoria: async (nomeCategoria) => {
    const { data } = await instance.get(`/categorias/${nomeCategoria}`);
    return data;
  },
};

export default categoriasService;
