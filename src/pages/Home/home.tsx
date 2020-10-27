import clsx from 'clsx';

import React, {FC, useEffect, useContext, useState, useCallback} from 'react';

import * as action from '../../Redux/Customers/action';

import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

import Carousel from './components/Carousel/Carousel';

import Customer from './components/Customers/Customers';

import Welcome from '../../components/Welcome/Welcome';

import imgMilktea from '../../assets/images/Carousel.jpg';

import ShowContext from '../../Context';

import styles from './home.module.css';

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  const [show] = useContext<any>(ShowContext);

  let [page, setPage] = useState(1);

  let [key, setKey] = useState<string>('');

  const dispatch = useDispatch();

  const payload = useSelector(
    (state: RootStateOrAny) => state.customerReducer.payload,
  );

  const loading = useSelector(
    (state: RootStateOrAny) => state.customerReducer.loading,
  );

  const maxPage = useSelector(
    (state: RootStateOrAny) => state.customerReducer.page,
  );

  const searchList = useSelector(
    (state: RootStateOrAny) => state.customerReducer.customersSearch,
  );

  const getCustomerList = useCallback(
    () => dispatch(action.getCustomerList(page)),
    [dispatch, page],
  );

  const searchCustomer = useCallback(
    () => dispatch(action.searchCustomerList(key)),
    [dispatch, key],
  );

  const createCustomer = (customerObj: object) =>
    dispatch(action.createCustomers(customerObj));

  const deleteCustomer = (id: number) => dispatch(action.deleteCustomers(id));

  const editCustomers = (id: number, userObj: object) =>
    dispatch(action.editCustomers(id, userObj));

  useEffect(() => {
    getCustomerList();
  }, [getCustomerList]);

  useEffect(() => {
    searchCustomer();
  }, [key, searchCustomer]);

  return (
    <div className={clsx(styles.main, show && styles.menu)}>
      <Welcome />
      <Carousel
        heading="Your loyal customers"
        description="Customer satisfaction is worthless.<br/>Customer loyalty is priceless"
        image={<img src={imgMilktea} alt="MilkTea" />}
      />
      <Customer
        page={maxPage}
        currentPage={page}
        searchKey={(key: string) => {
          setKey(key);
        }}
        nextPage={() => {
          setPage(page + 1);
        }}
        prevPage={() => {
          setPage(page - 1);
        }}
        editCustomers={editCustomers}
        deleteCustomer={deleteCustomer}
        createCustomer={createCustomer}
        loading={loading}
        getCustomerList={key === '' ? payload : searchList}
      />
    </div>
  );
};

export default Home;
