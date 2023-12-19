import React from 'react';
import styles from './Carrinho.module.scss';
import Header from '../../Components/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import Item from '../../Components/Item/Item';
import { resetarCarrinho } from '../../store/reducers/carrinho';
const Carrinho = () => {
  const dispatch = useDispatch();
  const { carrinho, total } = useSelector((state) => {
    const regexp = new RegExp(state.busca, 'i');
    let total = 0;
    const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
      total += item.preco * itemNoCarrinho.quantidade;
      if (item.titulo.match(regexp)) {
        itens.push({ ...item, quantidade: itemNoCarrinho.quantidade });
      }
      return itens;
    }, []);

    return { carrinho: carrinhoReduce, total: total };
  });
  return (
    <div>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira produtos que você adicionou ao carrinho."
      />

      <div className={styles.carrinho}>
        {carrinho.map((item) => (
          <Item key={item.id} {...item} carrinho />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra:</strong>
          <span>
            Subtotal: <strong>R$ {total.toFixed(2)}</strong>
          </span>
        </div>
        <button
          className={styles.finalizar}
          onClick={() => dispatch(resetarCarrinho())}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default Carrinho;
