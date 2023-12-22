import React from 'react';
import Header from '../../Components/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Anuncie.module.scss';
import Button from '../../Components/Button/Button';
import { useForm } from 'react-hook-form';
import { cadastrarItem } from '../../store/reducers/itens';
import { useParams } from 'react-router-dom';
const Anuncie = () => {
  const { nomeCategoria = '' } = useParams();
  const dispatch = useDispatch();
  const categorias = useSelector((state) =>
    state.categorias.map(({ nome, id }) => ({ nome, id })),
  );
  const { handleSubmit, register } = useForm({
    defaultValues: {
      categoria: nomeCategoria,
    },
  });
  const cadastrar = (formData) => {
    dispatch(cadastrarItem(formData));
  };
  return (
    <div className={styles.container}>
      <Header
        title="Anuncie aqui!"
        descricao="Anuncie seu produto no melhor site do Brasil!"
      />
      <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
        <input
          type="text"
          placeholder="Nome do produto"
          alt="nome do produto"
          {...register('titulo', { required: true })}
        />
        <input
          type="text"
          placeholder="Descrição do produto"
          alt="Descrição do produto"
          {...register('descricao', { required: true })}
        />
        <input
          type="text"
          placeholder="URL da imagem do produto"
          alt="URL da imagem do produto"
          {...register('foto', { required: true })}
        />
        <select
          {...register('categoria', { required: true })}
          disabled={nomeCategoria}
        >
          <option value="" disabled>
            Selecione a categoria!
          </option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>
        <input
          {...register('preco', { required: true, valueAsNumber: true })}
          type="number"
          placeholder="Preço do produto"
        />
        <Button type="submit" title="Cadastrar produto" />
      </form>
    </div>
  );
};

export default Anuncie;
