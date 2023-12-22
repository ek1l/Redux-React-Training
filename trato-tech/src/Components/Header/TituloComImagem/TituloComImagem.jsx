import React from 'react';
import styles from './TituloComImagem.module.scss';

export default function TituloComImagem({
  children,
  titulo,
  descricao,
  imagem,
  className,
}) {
  return (
    <div className={`${className} ${styles.header}`}>
      <div className={styles['header-texto']}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
        {children}
      </div>
      <div className={styles['header-imagem']}>
        <img alt={titulo} src={imagem} />
      </div>
    </div>
  );
}
