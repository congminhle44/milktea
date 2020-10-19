import clsx from 'clsx';

import React, {AllHTMLAttributes, FC} from 'react';

import {ReactComponent as IcoError} from './svg/Error.svg';
import {ReactComponent as IcoSuccess} from './svg/Success.svg';
import {ReactComponent as IcoPassword} from './svg/TogglePassword.svg';

import styles from './input.module.css';

interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  border?: boolean;
  success?: boolean;
  error?: boolean;
  password?: boolean;
  multiline?: boolean;
  label?: string;
  message?: string;
}

const Input: FC<InputProps> = ({
  border = true,
  password,
  message,
  multiline,
  label,
  success,
  error,
  id,
  ...others
}) => {
  const renderIcon = () => {
    if (error) return <IcoError />;

    if (success) return <IcoSuccess />;

    if (password)
      return (
        <div className={styles.PasswordIco}>
          <IcoPassword />
        </div>
      );
    return null;
  };

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {!multiline ? (
        <div className={styles.inputWrapper}>
          <input
            className={clsx(
              styles.input,
              error && styles.error,
              success && styles.success,
              !border && styles.noBorder,
            )}
            id={id}
            {...others}
          />
          <div className={styles.StatusIco}>{renderIcon()}</div>
        </div>
      ) : (
        <>
          <textarea
            placeholder="Please enter your text here..."
            className={styles.multilineText}
          />
          <p className={styles.message}>{message}</p>
        </>
      )}
    </div>
  );
};

export default Input;
