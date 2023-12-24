import instance from '../common/config/api';

const itensService = {
  buscar: async () => {
    const { data } = await instance('/itens');
    return data;
  },
  buscarDeCategorias: async (nomeCategoria) => {
    const { data } = await instance.get(`/itens?categoria=${nomeCategoria}`);
    return data;
  },
};

export default itensService;
