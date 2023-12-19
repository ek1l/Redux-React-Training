import React from 'react';
import styles from './Header.module.scss';
import TituloSemImagem from './TituloSemImagem/TituloSemImagem';
import TituloComImagem from './TituloComImagem/TituloComImagem';
const Header = ({ titulo, descricao, classname = '', imagem }) => {
  return (
    <header className={styles.header}>
      {titulo && !imagem && (
        <TituloSemImagem titulo={titulo} descricao={descricao} />
      )}
      {titulo && imagem && (
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={classname}
        />
      )}
    </header>
  );
};

export default Header;
