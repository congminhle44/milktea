import React, {FC} from 'react';
import {MenuIcon} from '../Icons';
import styles from './welcome.module.css';

interface WelcomeProps {
  showMenu?: any;
}

const Welcome: FC<WelcomeProps> = ({showMenu}) => {
  return (
    <div className={styles.welcomeWrapper}>
      <div className={styles.welcomeContent}>
        <p>Hi MilkTea guys,</p>
        <h3>Welcome back</h3>
      </div>
      <div
        onClick={() => {
          showMenu();
        }}
        className={styles.toggleMenu}
      >
        <MenuIcon />
      </div>
    </div>
  );
};

export default Welcome;
