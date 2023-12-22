import React from 'react';
import styles from './Header.module.scss';
import TituloSemImagem from './TituloSemImagem/TituloSemImagem';
import TituloComImagem from './TituloComImagem/TituloComImagem';
const Header = ({ children, titulo, descricao, classname = '', imagem }) => {
  return (
    <header className={styles.header}>
      {titulo && !imagem && (
        <TituloSemImagem titulo={titulo} descricao={descricao}>
          {children}
        </TituloSemImagem>
      )}
      {titulo && imagem && (
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={classname}
        >
          {children}
        </TituloComImagem>
      )}
    </header>
  );
};

export default Header;
