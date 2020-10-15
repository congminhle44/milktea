import React, { FC } from "react";
import styles from "./radiobutton.module.css";

interface RadioProps {
  name: string;
  disable: boolean;
}

const RadioButton: FC<RadioProps> = ({ name, disable }) => {
  return (
    <input
      name={name}
      className={styles.rdoButton}
      type="radio"
      disabled={disable}
    />
  );
};

export default RadioButton;
