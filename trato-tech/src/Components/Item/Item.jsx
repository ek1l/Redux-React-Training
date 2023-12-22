import React, { useState } from 'react';
import styles from './Item.module.scss';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineCheck,
  AiFillEdit,
} from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { mudarFavorito } from '../../store/reducers/itens';
import { useDispatch, useSelector } from 'react-redux';
import { mudarCarrinho, mudarQuantidade } from '../../store/reducers/carrinho';
import classNames from 'classnames';

const iconeProps = {
  size: 24,
  color: '#041833',
};

const quantidadeProps = {
  size: 32,
  color: '#1875E8',
};

const Item = (props) => {
  const { id, titulo, foto, preco, descricao, favorito, carrinho, quantidade } =
    props;
  const [modoDeEdicao, setModoDeEdicao] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(titulo);
  const estaNoCarrinho = useSelector((state) =>
    state.carrinho.some((itemNoCarrinho) => itemNoCarrinho.id === id),
  );

  const dispatch = useDispatch();
  const resolverFavorito = () => {
    dispatch(mudarFavorito(id));
  };
  const resolverCarrinho = () => {
    dispatch(mudarCarrinho(id));
  };
  const ComponentModoDeEdicao = () => (
    <>
      {modoDeEdicao ? (
        <AiOutlineCheck
          {...iconeProps}
          className={styles['item-acao']}
          onClick={() => setModoDeEdicao(false)}
        />
      ) : (
        <AiFillEdit
          {...iconeProps}
          className={styles['item-acao']}
          onClick={() => setModoDeEdicao(true)}
        />
      )}
    </>
  );
  return (
    <div
      className={classNames(styles.item, {
        [styles.itemNoCarrinho]: carrinho,
      })}
    >
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          {modoDeEdicao ? (
            <input
              type="text"
              value={novoTitulo}
              onChange={(e) => setNovoTitulo(e.target.value)}
            />
          ) : (
            <h2>{titulo}</h2>
          )}
          <p>{descricao}</p>
        </div>
        <div className={styles['item-acoes']}>
          <div className={styles['item-info']}>
            <div className={styles['item-preco']}>R$ {preco.toFixed(2)}</div>
          </div>
          {favorito ? (
            <AiFillHeart
              {...iconeProps}
              color="#ff0000"
              className={styles['item-acao']}
              onClick={resolverFavorito}
            />
          ) : (
            <AiOutlineHeart
              {...iconeProps}
              className={styles['item-acao']}
              onClick={resolverFavorito}
            />
          )}
          {carrinho ? (
            <div className={styles.quantidade}>
              Quantidade:
              <AiFillMinusCircle
                {...quantidadeProps}
                onClick={() => {
                  if (quantidade >= 2) {
                    dispatch(mudarQuantidade({ id, quantidade: -1 }));
                  }
                }}
              />
              <span>{String(quantidade || 0).padStart(2, '0')}</span>
              <AiFillPlusCircle
                {...quantidadeProps}
                onClick={() => {
                  dispatch(mudarQuantidade({ id, quantidade: +1 }));
                }}
              />
            </div>
          ) : (
            <>
              <FaCartPlus
                {...iconeProps}
                color={estaNoCarrinho ? '#1875e8' : iconeProps.color}
                className={styles['item-acao']}
                onClick={resolverCarrinho}
              />
              <ComponentModoDeEdicao />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
