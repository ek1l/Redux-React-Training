import React from 'react';
import styles from './Navbar.module.scss';
import Logo from '../../assets/logo.svg';
import classNames from 'classnames';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import Busca from '../Busca/Busca';

const iconeProps = {
  color: 'white',
  size: 24,
};

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src={Logo} alt="Logo" />
      <div className={styles.links}>
        <div>
          <a
            href="/"
            className={classNames(styles.link, {
              [styles.selected]: window.localStorage.pathname === '/',
            })}
          >
            Página inicial
          </a>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <a href="/carrinho">
          {window.location.pathname === '/carrinho' ? (
            <RiShoppingCart2Line {...iconeProps} />
          ) : (
            <RiShoppingCartFill {...iconeProps} />
          )}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
