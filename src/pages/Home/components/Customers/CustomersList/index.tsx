import clsx from 'clsx';

import React, {FC} from 'react';

import styles from './customerList.module.css';

import Button, {ButtonVariants} from '../../../../../components/Button';

import formatPoint from '../../../../../Helper/formatPoints';

import {Loading} from '../../../../../components/Loading';

import identifyRank from '../../../../../Helper/indentifyRank';

interface ListProps {
  setModal?: any;
  setUser?: any;
  setDeleteModal?: any;
  customers?: any;
  loading?: boolean;
}

const List: FC<ListProps> = ({
  customers,
  setDeleteModal,
  setModal,
  loading,
  setUser,
}) => {
  const renderCustomerTableContent = () => {
    let isDbClick: boolean = false;

    if (customers) {
      return customers.map((customer: any, index: number) => {
        return (
          <tr
            onClick={() => {
              setTimeout(() => {
                if (isDbClick === false) {
                  setModal();
                  setUser(customer);
                }
              }, 200);
            }}
            onDoubleClick={() => {
              isDbClick = true;
              setUser(customer);
              setDeleteModal();
            }}
            className={styles.listItem}
            key={index}
          >
            <td>
              <div className={styles.listInfo}>
                <img
                  className={styles.avatar}
                  src={customer.avatar}
                  alt="user"
                />
                <div className={styles.info}>
                  <h5 className={styles.infoTitle}>{customer.name}</h5>
                  <p className={styles.infoContent}>{customer.title}</p>
                </div>
              </div>
            </td>
            <td>
              <p
                className={clsx(
                  styles.rankDetail,
                  identifyRank(customer.points) === 'Gold' && styles.gold,
                  identifyRank(customer.points) === 'Silver' && styles.silver,
                  identifyRank(customer.points) === 'Bronze' && styles.bronze,
                  identifyRank(customer.points) === 'Plastic' && styles.plastic,
                )}
              >
                {identifyRank(customer.points)}
              </p>
            </td>
            <td className={styles.point}>
              <p>{formatPoint(customer.points)}</p>
            </td>
          </tr>
        );
      });
    }
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
        {loading ? (
          <div className={styles.loading}>
            <Loading />
          </div>
        ) : null}
        <tbody>{renderCustomerTableContent()}</tbody>
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
