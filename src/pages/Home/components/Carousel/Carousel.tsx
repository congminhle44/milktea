import React, {FC, ReactNode} from 'react';

import styles from './carousel.module.css';

interface CarouselProps {
  image: ReactNode;
  heading: string;
  description: string;
}

const Carousel: FC<CarouselProps> = ({image, heading, description}) => (
  <div className={styles.carousel}>
    <div className={styles.image}>{image}</div>
    <div className={styles.content}>
      <h3 className={styles.heading}>{heading}</h3>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{__html: description}}
      />
    </div>
  </div>
);

export default Carousel;
