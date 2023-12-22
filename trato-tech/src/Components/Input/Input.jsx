import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

const Input = ({ value, onChange, placeholder, ...outrosProps }, ref) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.input}
      ref={ref}
      {...outrosProps}
    />
  );
};

export default forwardRef(Input);
