import React from 'react';
import styles from './Button.module.scss';
const Button = ({ title, type, onClick }) => {
  return (
    <button className={styles.finalizar} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
