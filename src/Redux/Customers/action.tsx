import {api} from '../../config/api/baseUrl';

import {customers} from '../../config/api/baseUrl/customer';

import * as ActionTypes from './constants';

export const getCustomerList = () => {
  return async (dispatch: any) => {
    try {
      const _customers = await api.get(customers);
      dispatch({
        type: ActionTypes.GET_USER_LIST,
        customers: _customers.data,
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
