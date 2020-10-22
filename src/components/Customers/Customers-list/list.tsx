import React, {FC, useEffect, useState} from 'react';

import {connect} from 'react-redux';

import styles from './list.module.css';

import Button, {ButtonVariants} from '../../Button';

import formatPoint from '../../../Helper/formatPoints';

import * as action from '../../../Redux/Customers/action';

interface ListProps {
  setModal?: any;
  setUser?: any;
  setDeleteModal?: any;
  customers?: any;
  getCustomerList?: any;
}

const List: FC<ListProps> = ({
  customers,
  setDeleteModal,
  setModal,
  setUser,
  getCustomerList,
}) => {
  useEffect(() => {
    getCustomerList();
  }, []);

  const renderCustomer = () => {
    let isDbClick: boolean = false;

    if (customers.length > 0) {
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
                <img src={customer.avatar} alt="user" />
                <div className={styles.info}>
                  <h5>{customer.name}</h5>
                  <p>{customer.title}</p>
                </div>
              </div>
            </td>
            {/* <td className={styles.rank}>
              <p
              className={clsx(
                styles.rankDetail,
                customer.rank === 'Silver' && styles.silver,
                customer.rank === 'Gold' && styles.gold,
                customer.rank === 'Bronze' && styles.bronze,
              )}
              >
                {customer.rank}
              </p>
            </td> */}
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
            {/* <th className={styles.tablet}>Rank</th> */}
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

const mapStateToProps = (state: any) => ({
  customers: state.customerReducer.customers,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getCustomerList: () => {
      dispatch(action.getCustomerListApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
