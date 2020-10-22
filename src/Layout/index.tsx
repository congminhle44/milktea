import React, {FC} from 'react';

import Header from '../components/Header/Header';

import styles from './Layout.module.css';

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
