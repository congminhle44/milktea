import {api} from '../../config/api/baseUrl';

import {customers} from '../../config/api/baseUrl/customer';

import * as ActionTypes from './constants';

let parse = require('../../../node_modules/parse-link-header');

export const getCustomerList = (page: number) => {
  return async (dispatch: any) => {
    try {
      const _customers = await api.get(`${customers}?_page=${page}&_limit=3`);

      dispatch({
        type: ActionTypes.GET_USER_LIST,
        loading: false,
        customers: _customers.data,
      });

      dispatch({
        type: ActionTypes.GET_LAST_PAGE,
        page: parse(_customers.headers.link),
      });
    } catch (err) {
      return err;
    }
  };
};

export const searchCustomerList = (searchKey: string) => {
  return async (dispatch: any) => {
    try {
      const _customers = await api.get(`${customers}?name=${searchKey}`);
      dispatch({
        type: ActionTypes.GET_USER_SEARCH,
        loading: false,
        customersSearch: _customers.data,
      });
    } catch (err) {
      return err;
    }
  };
};

export const createCustomers = (userObject: object) => {
  return async (dispatch: any) => {
    try {
      const _customers = await api.post(customers, userObject);
      dispatch({
        type: ActionTypes.CREATE_USER,
        userObject: _customers.data,
      });
    } catch (err) {
      return err;
    }
  };
};

export const deleteCustomers = (id: number) => {
  return async (dispatch: any) => {
    try {
      await api.delete(`${customers}/${id}`);
    } catch (err) {
      return err;
    }
  };
};

export const editCustomers = (id: number, userObj: object) => {
  return async (dispatch: any) => {
    try {
      await api.put(`${customers}/${id}`, userObj);
    } catch (err) {
      return err;
    }
  };
};
