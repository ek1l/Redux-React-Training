import React from 'react';
import Header from '../../Components/Header/Header';
import { useSelector } from 'react-redux';
import styles from './Anuncie.module.scss';
import Button from '../../Components/Button/Button';
const Anuncie = () => {
  const categorias = useSelector((state) =>
    state.categorias.map(({ nome, id }) => ({ nome, id })),
  );

  return (
    <div className={styles.container}>
      <Header
        title="Anuncie aqui!"
        descricao="Anuncie seu produto no melhor site do Brasil!"
      />
      <form className={styles.formulario}>
        <input
          type="text"
          placeholder="Nome do produto"
          alt="nome do produto"
        />
        <input
          type="text"
          placeholder="Descrição do produto"
          alt="Descrição do produto"
        />
        <input
          type="text"
          placeholder="URL da imagem do produto"
          alt="URL da imagem do produto"
        />
        <select>
          <option value="" disabled>
            Selecione a categoria!
          </option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>
        <input type="number" placeholder="Preço do produto" />
        <Button type="submit" title="Cadastrar produto" />
      </form>
    </div>
  );
};

export default Anuncie;
