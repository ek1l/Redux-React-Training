import React, { useCallback, useEffect } from 'react';
import styles from './Home.module.scss';
import Header from '../../Components/Header/Header';
import Relogio from '../../assets/inicial.png';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../Components/Button/Button';
import { buscarItens } from '../../store/reducers/itens';
import { buscarCategorias } from '../../store/reducers/categorias';
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categorias = useSelector((state) => state.categorias);

  useEffect(() => {
    
    dispatch(buscarCategorias());
    dispatch(buscarItens());
    buscarItens();
  }, [dispatch, buscarItens]);
  return (
    <div className={styles.separador}>
      <Header
        titulo="Classificados Tech"
        descricao="Compre diversos tipos de produtos no melhor site do Brasil"
        imagem={Relogio}
        classname={styles.header}
      >
        <Button title="Quero anunciar" onClick={() => navigate('/anuncie')} />
      </Header>
      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>Categorias</h1>
        </div>
        <div className={styles['categorias-container']}>
          {categorias.map((categoria, index) => {
            return (
              <div
                key={index}
                onClick={() => navigate(`/categoria/${categoria.id}`)}
              >
                <img src={categoria.thumbnail} alt={categoria.nome} />
                <h1>{categoria.nome}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
