import React, {FC} from 'react';
import styles from './list.module.css';
import data from './data';
import clsx from 'clsx';
import Button, {ButtonVariants} from '../../Button';

interface ListProps {}

const List: FC<ListProps> = (props) => {
  const renderCustomer = () => {
    return data.map((data, index) => {
      return (
        <tr key={index}>
          <td>
            <div className={styles.listInfo}>
              <img src={data.images} alt="user" />
              <div className={styles.info}>
                <h5>{data.name}</h5>
                <p>{data.description}</p>
              </div>
            </div>
          </td>
          <td className={styles.rank}>
            <p
              className={clsx(
                styles.rankDetail,
                data.rank === 'Silver' && styles.silver,
                data.rank === 'Gold' && styles.gold,
                data.rank === 'Bronze' && styles.bronze,
              )}
            >
              {data.rank}
            </p>
          </td>
          <td className={styles.point}>
            <p>{data.point}</p>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className={styles.customerList}>
      <table className={styles.customerTable}>
        <thead>
          <tr>
            <th>Customer</th>
            <th className={styles.tablet}>Rank</th>
            <th className={styles.tablet}>Points</th>
          </tr>
        </thead>
        <tbody>{renderCustomer()}</tbody>
      </table>
      <div className={styles.loadButton}>
        <Button>Load more</Button>
      </div>
    </div>
  );
};

export default List;
