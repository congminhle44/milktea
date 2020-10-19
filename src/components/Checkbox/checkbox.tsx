import React, {AllHTMLAttributes, FC} from 'react';
import styles from './checkbox.module.css';

interface CheckboxProps extends AllHTMLAttributes<HTMLInputElement> {}

const Checkbox: FC<CheckboxProps> = ({...others}) => {
  return <input className={styles.checkbox} type="checkbox" {...others} />;
};

export default Checkbox;
