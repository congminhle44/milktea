import React, {FC} from 'react';
import styles from './list.module.css';
import data from './data';
import clsx from 'clsx';
import Button, {ButtonVariants} from '../../Button';
import formatPoint from '../../../Helper/formatPoints';

interface ListProps {
  setModal: any;
  setUser: any;
  setDeleteModal: any;
}

const List: FC<ListProps> = ({setDeleteModal, setModal, setUser}) => {
  const renderCustomer = () => {
    let isDbClick: boolean = false;
    return data.map((data, index) => {
      return (
        <tr
          onClick={() => {
            setTimeout(() => {
              if (isDbClick === false) {
                setModal();
                setUser(data);
              }
            }, 200);
          }}
          onDoubleClick={() => {
            isDbClick = true;
            setDeleteModal();
          }}
          className={styles.listItem}
          key={index}
        >
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
            <p>{formatPoint(data.point)}</p>
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
        <Button variant={ButtonVariants.Large}>
          <p className={styles.loadContent}>Load more</p>
        </Button>
      </div>
    </div>
  );
};

export default List;
