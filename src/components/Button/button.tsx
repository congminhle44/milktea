import clsx from 'clsx';
import React, {AllHTMLAttributes, FC, ReactNode} from 'react';

import {ButtonVariants} from './types';

import styles from './button.module.css';

interface ButtonProps extends AllHTMLAttributes<HTMLButtonElement> {
  ghost?: boolean;
  variant?: ButtonVariants;
  icon?: ReactNode;
  type?: 'submit' | 'reset' | 'button';
}

const Button: FC<ButtonProps> = ({
  ghost,
  children,
  variant,
  icon,
  type = 'button',
  ...others
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        ButtonVariants.Large === variant && styles.large,
        ButtonVariants.Small === variant && styles.small,
        ghost && styles.ghost,
      )}
      type={type}
      {...others}
    >
      {icon} {children}
    </button>
  );
};

export default Button;
