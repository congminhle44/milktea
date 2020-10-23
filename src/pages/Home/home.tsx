import clsx from 'clsx';

import React, {FC, useEffect, useContext} from 'react';

import * as action from '../../Redux/Customers/action';

import {connect} from 'react-redux';

import Carousel from './components/Carousel/Carousel';

import Customer from './components/Customers/Customers';

import Welcome from '../../components/Welcome/Welcome';

import imgMilktea from '../../assets/images/Carousel.jpg';

import ShowContext from '../../Context';

import styles from './home.module.css';

interface HomeProps {
  customers?: [];
  getCustomerList?: any;
  loading?: boolean;
  createCustomer?: any;
  deleteCustomer?: any;
  editCustomers?: any;
}

const Home: FC<HomeProps> = ({
  getCustomerList,
  createCustomer,
  deleteCustomer,
  editCustomers,
  customers,
  loading,
}) => {
  useEffect(() => {
    getCustomerList();
  }, [getCustomerList()]);

  const [show] = useContext<any>(ShowContext);

  return (
    <div className={clsx(styles.main, show && styles.menu)}>
      <Welcome />
      <Carousel
        heading="Your loyal customers"
        description="Customer satisfaction is worthless.<br/>Customer loyalty is priceless"
        image={<img src={imgMilktea} alt="MilkTea" />}
      />
      <Customer
        editCustomers={editCustomers}
        deleteCustomer={deleteCustomer}
        createCustomer={createCustomer}
        loading={loading}
        getCustomerList={customers}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  customers: state.customerReducer.customers,
  loading: state.customerReducer.loading,
  userObject: state.customerReducer.userObject,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getCustomerList: () => {
      dispatch(action.getCustomerList());
    },

    createCustomer: (customerObj: object) => {
      dispatch(action.createCustomers(customerObj));
    },

    deleteCustomer: (id: number) => {
      dispatch(action.deleteCustomers(id));
    },

    editCustomers: (id: number, userObj: object) => {
      dispatch(action.editCustomers(id, userObj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
