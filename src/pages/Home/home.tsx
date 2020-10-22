import React, {FC, useContext} from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Customer from '../../components/Customers/Customers';
import Welcome from '../../components/Welcome/Welcome';

import imgMilktea from '../../assets/images/Carousel.jpg';
import ShowContext from '../../Layout/Context';

import styles from './home.module.css';
import clsx from 'clsx';

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  const [show, setShow] = useContext<any>(ShowContext);
  return (
    <div className={clsx(styles.main, show && styles.menu)}>
      <Welcome />
      <Carousel
        heading="Your loyal customers"
        description="Customer satisfaction is worthless.<br/>Customer loyalty is priceless"
        image={<img src={imgMilktea} alt="MilkTea" />}
      />
      <Customer />
    </div>
  );
};

export default Home;
