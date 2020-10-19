import clsx from 'clsx';

import React, {AllHTMLAttributes, FC} from 'react';

import {ReactComponent as IcoError} from './svg/Error.svg';
import {ReactComponent as IcoSuccess} from './svg/Success.svg';
import {ReactComponent as IcoPassword} from './svg/TogglePassword.svg';
import {ReactComponent as Search} from './svg/search.svg';

import styles from './input.module.css';

interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  border?: boolean;
  success?: boolean;
  error?: boolean;
  password?: boolean;
  multiline?: boolean;
  search?: boolean;
  label?: string;
  message?: string;
}

const Input: FC<InputProps> = ({
  border = true,
  password,
  message,
  multiline,
  label,
  search,
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
        <div
          className={clsx(
            styles.inputWrapper,
            search && styles.inputWrapperSearch,
          )}
        >
          {search ? (
            <div className={styles.searchIcon}>
              <Search />
            </div>
          ) : null}
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
