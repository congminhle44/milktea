import React, {FC} from 'react';
import styles from './carousel.module.css';

interface CarouselProps {}

const Carousel: FC<CarouselProps> = (props) => {
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselImg}>
        <img src="./images/Carousel.jpg" alt="Milk tea carousel" />
      </div>
      <div className={styles.carouselContent}>
        <h3>Your loyal customers</h3>
        <p>Customer satisfaction is worthless. Customer loyalty is priceless</p>
      </div>
    </div>
  );
};

export default Carousel;
