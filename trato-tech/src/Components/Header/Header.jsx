import React from 'react';
import styles from './Header.module.scss';
const Header = ({ titulo, descricao, classname = '', imagem }) => {
  return (
    <header className={`${styles.header} ${classname}`}>
      <div className={styles['header-texto']}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </div>
      <div className={styles['header-imagem']}>
        <img src={imagem} alt={titulo} />
      </div>
    </header>
  );
};

export default Header;
