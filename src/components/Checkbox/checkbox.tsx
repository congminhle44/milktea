import clsx from 'clsx';
import React, {AllHTMLAttributes, FC} from 'react';
import styles from './checkbox.module.css';

interface CheckboxProps extends AllHTMLAttributes<HTMLInputElement> {}

const Checkbox: FC<CheckboxProps> = ({className, ...others}) => {
  return (
    <input
      className={clsx(styles.checkbox, className)}
      type="checkbox"
      {...others}
    />
  );
};

export default Checkbox;
