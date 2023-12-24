import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Categoria.module.scss';
import Item from '../../Components/Item/Item';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
import {
  carregarCategorias,
  carregarUmaCategoria,
} from '../../store/reducers/categorias';
import { buscarItens } from '../../store/reducers/itens';

const Categoria = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nomeCategoria } = useParams();
  const { categoria, itens } = useSelector((state) => {
    const regexp = new RegExp(state.busca, 'i');
    return {
      categoria: state.categorias.find(
        ((categoria) => categoria.id === nomeCategoria) || {},
      ),
      itens: state.itens.filter(
        (item) => item.categoria === nomeCategoria && item.titulo.match(regexp),
      ),
    };
  });

  // useEffect(() => {
  //   dispatch(carregarCategorias());
  //   dispatch(buscarItens());
  //   buscarItens();
  // }, [dispatch, buscarItens]);
  useEffect(() => {
    dispatch(carregarUmaCategoria(nomeCategoria));
  }, [dispatch, nomeCategoria]);
  if (categoria)
    return (
      <div>
        <Header
          titulo={categoria.nome}
          descricao={categoria.descricao}
          imagem={categoria.header}
        >
          <Button
            title="Quero anunciar"
            onClick={() => navigate(`/anuncie/${nomeCategoria}`)}
          />
        </Header>
        <div className={styles.itens}>
          {itens?.map((item, index) => (
            <div key={index}>
              <Item key={item.id} {...item} />
            </div>
          ))}
        </div>
      </div>
    );
};

export default Categoria;
