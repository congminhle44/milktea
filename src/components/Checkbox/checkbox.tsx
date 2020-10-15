import React, { FC } from "react";
import styles from "./checkbox.module.css";

interface CheckboxProps {
  disable: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ disable }) => {
  return (
    <input className={styles.checkbox} type="checkbox" disabled={disable} />
  );
};

export default Checkbox;
