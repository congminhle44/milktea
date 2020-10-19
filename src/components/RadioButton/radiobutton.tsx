import React, {AllHTMLAttributes, FC} from 'react';
import styles from './radiobutton.module.css';

interface RadioProps extends AllHTMLAttributes<HTMLInputElement> {}

const RadioButton: FC<RadioProps> = ({...others}) => {
  return <input className={styles.rdoButton} type="radio" {...others} />;
};

export default RadioButton;
