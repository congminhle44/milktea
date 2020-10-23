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
}

const Home: FC<HomeProps> = ({getCustomerList, customers, loading}) => {
  useEffect(() => {
    getCustomerList();
  }, []);

  const [show, setShow] = useContext<any>(ShowContext);

  return (
    <div className={clsx(styles.main, show && styles.menu)}>
      <Welcome />
      <Carousel
        heading="Your loyal customers"
        description="Customer satisfaction is worthless.<br/>Customer loyalty is priceless"
        image={<img src={imgMilktea} alt="MilkTea" />}
      />
      <Customer loading={loading} getCustomerList={customers} />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  customers: state.customerReducer.customers,
  loading: state.customerReducer.loading,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getCustomerList: () => {
      dispatch(action.getCustomerListApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
