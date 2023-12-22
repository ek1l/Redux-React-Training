import instance from '../common/config/api';

const itensService = {
  buscar: async () => {
    const { data } = await instance('/itens');
    return data;
  },
};

export default itensService;
