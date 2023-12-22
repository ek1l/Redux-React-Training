import instance from '../common/config/api';

const categoriasService = {
  buscar: async () => {
    const { data } = await instance.get('/categorias');
    return data;
  },
};

export default categoriasService;
