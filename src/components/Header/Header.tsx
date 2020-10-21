import React, {FC} from 'react';

import {Employee, Cancel, Reports, Rev, Loyal} from '../Icons';

import styles from './header.module.css';

interface HeaderProps {
  hideMenu: any;
}

const Home: FC<HeaderProps> = ({hideMenu}) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <div
          onClick={() => {
            hideMenu();
          }}
          className={styles.cancelButton}
        >
          <Cancel />
        </div>
        <img src="./images/logo.png" alt="milk tea logo" />
      </div>
      <div className={styles.headerMenu}>
        <div className={styles.headerMenuItem}>
          <Employee />
          <p>Employees</p>
        </div>
        <div className={styles.headerMenuItem}>
          <Loyal />
          <p>Loyal customers</p>
        </div>
        <div className={styles.headerMenuItem}>
          <Reports />
          <p>Reports</p>
        </div>
        <div className={styles.headerMenuItem}>
          <Rev />
          <p>Revenue</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
