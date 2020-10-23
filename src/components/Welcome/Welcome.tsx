import React, {FC, useContext} from 'react';
import ShowContext from '../../Context';
import {MenuIcon} from '../Icons';
import styles from './welcome.module.css';

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
  const [, setShow] = useContext<any>(ShowContext);
  return (
    <div className={styles.welcomeWrapper}>
      <div className={styles.welcomeContent}>
        <p>Hi MilkTea guys,</p>
        <h3>Welcome back</h3>
      </div>
      <div
        onClick={() => {
          setShow(true);
        }}
        className={styles.toggleMenu}
      >
        <MenuIcon />
      </div>
    </div>
  );
};

export default Welcome;
