import clsx from 'clsx';
import React, {FC, useContext} from 'react';

import ShowContext from '../../Context';

import {Employee, Cancel, Reports, Rev, Loyal} from '../Icons';

import styles from './header.module.css';

interface HeaderProps {}

const Home: FC<HeaderProps> = (props) => {
  const [show, setShow] = useContext<any>(ShowContext);
  return (
    <div className={clsx(styles.header, show && styles.menu)}>
      <div className={styles.headerLogo}>
        <div
          onClick={() => {
            setShow(false);
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
