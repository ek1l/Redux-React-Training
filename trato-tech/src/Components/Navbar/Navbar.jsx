import React from 'react';
import styles from './Navbar.module.scss';
import Logo from '../../assets/logo.svg';
import classNames from 'classnames';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import Busca from '../Busca/Busca';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const iconeProps = {
  color: 'white',
  size: 24,
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
      <img
        style={{ cursor: 'pointer' }}
        src={Logo}
        alt="Logo"
        onClick={() => navigate('/')}
      />
      <div className={styles.links}>
        <div>
          <Link
            to="/"
            className={classNames(styles.link, {
              [styles.selected]: location.pathname === '/',
            })}
          >
            Página inicial
          </Link>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <Link to="/carrinho">
          {location.pathname === '/carrinho' ? (
            <RiShoppingCart2Line {...iconeProps} />
          ) : (
            <RiShoppingCartFill {...iconeProps} />
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
