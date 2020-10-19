import React, {FC, useState} from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Customer from '../../components/Customers/Customers';
import Header from '../../components/Header/Header';
import Welcome from '../../components/Welcome/Welcome';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className={!showMenu ? 'home' : 'home menu'}>
      <div className="header">
        <Header
          hideMenu={() => {
            setShowMenu(false);
          }}
        />
      </div>
      <div className="main">
        <Welcome
          showMenu={() => {
            setShowMenu(true);
          }}
        />
        <Carousel />
        <Customer />
      </div>
    </div>
  );
};

export default Home;
