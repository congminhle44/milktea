import React, {FC, useState} from 'react';

import Header from '../components/Header/Header';

import styles from './Layout.module.css';

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({children}) => {
  const [isHideMenu, setIsHideMenu] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <Header
        hideMenu={() => {
          setIsHideMenu(false);
        }}
      />
      {children}
    </div>
  );
};

export default Layout;
