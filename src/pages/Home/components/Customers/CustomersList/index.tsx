import clsx from 'clsx';

import React, {FC, useCallback, useRef} from 'react';

import styles from './customerList.module.css';

import formatPoint from '../../../../../Helper/formatPoints';

import {Loading} from '../../../../../components/Loading';

import identifyRank from '../../../../../Helper/indentifyRank';
import firstLetterUppercase from '../../../../../Helper/firstLetterToUppercase';

interface ListProps {
  setModal?: any;
  setUser?: any;
  setDeleteModal?: any;
  customers?: any;
  loading?: boolean;
  page?: any;
  prev?: any;
  next?: any;
  currentPage?: number;
}

const List: FC<ListProps> = ({
  customers,
  // currentPage,
  // prev,
  next,
  setDeleteModal,
  setModal,
  loading,
  setUser,
  page,
}) => {
  const _page = page ? page : '';

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  const observer: any = useRef();

  const lastCustomerElement = useCallback(
    (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          next();
        }
      }, options);
      if (node) observer.current.observe(node);
    },
    [observer, customers],
  );

  const renderCustomerTableContent = () => {
    let isDbClick: boolean = false;
    if (customers) {
      return customers.map((customer: any, index: number) => {
        return (
          <tr
            ref={
              customers.length === index + 1 && _page.next
                ? lastCustomerElement
                : null
            }
            onClick={() => {
              setTimeout(() => {
                setUser(customer);
                if (isDbClick === false) {
                  setModal();
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
                  <h5 className={styles.infoTitle}>
                    {firstLetterUppercase(customer.name)}
                  </h5>
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
        <tbody>{renderCustomerTableContent()}</tbody>
        {loading ? (
          <div className={styles.loading}>
            <Loading />
          </div>
        ) : null}
      </table>
      {/* <div className={styles.page}>
        <div className={styles.pageDetail}>
          <Button
            disabled={_page.prev ? false : true}
            onClick={() => {
              prev();
            }}
            variant={ButtonVariants.Small}
          >
            Prev
          </Button>
          <div className={styles.pageNumber}>{currentPage}</div>
          <Button
            disabled={_page.next ? false : true}
            onClick={() => {
              next();
            }}
            variant={ButtonVariants.Small}
          >
            Next
          </Button>
        </div>
        <div className={styles.clear}></div>
      </div> */}
    </div>
  );
};

export default List;
