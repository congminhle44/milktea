import React, {FC, useState} from 'react';

import Header from '../components/Header/Header';

import styles from './Layout.module.css';

import ShowContext from '../Context';

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({children}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <ShowContext.Provider value={[show, setShow]}>
        <Header />
        {children}
      </ShowContext.Provider>
    </div>
  );
};

export default Layout;
