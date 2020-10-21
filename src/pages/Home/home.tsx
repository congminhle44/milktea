import React, {FC} from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Customer from '../../components/Customers/Customers';
import Welcome from '../../components/Welcome/Welcome';

import imgMilktea from '../../assets/images/Carousel.jpg';

interface HomeProps {
  openMenu?: () => void;
}

const Home: FC<HomeProps> = ({openMenu}) => {
  return (
    <div className="main">
      <Welcome showMenu={openMenu} />
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
