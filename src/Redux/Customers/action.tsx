import {api} from '../../config/api/baseUrl';

import {customers} from '../../config/api/baseUrl/customer';

import * as ActionTypes from './constants';

let parse = require('../../../node_modules/parse-link-header');

export const getCustomerList = (page: number) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.get(`${customers}?_page=${page}&_limit=3`);
      dispatch({
        type: ActionTypes.GET_USER,
        payload: payload.data,
        page: parse(payload.headers.link),
      });
    } catch (err) {
      return err;
    }
  };
};

export const searchCustomerList = (searchKey: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.get(`${customers}?name=${searchKey}`);
      dispatch({
        type: ActionTypes.SEARCH_USER,
        customersSearch: payload.data,
      });
    } catch (err) {
      return err;
    }
  };
};

export const createCustomers = (userObject: object) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.post(customers, userObject);
      dispatch({
        type: ActionTypes.CREATE_USER,
        payload: payload.data,
      });
    } catch (err) {
      return err;
    }
  };
};

export const editCustomers = (id: number, userObj: object) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.put(`${customers}/${id}`, userObj);
      dispatch({
        type: ActionTypes.EDIT_USER,
        payload: payload.data,
      });
    } catch (err) {
      return err;
    }
  };
};

export const deleteCustomers = (id: number) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionTypes.REQUEST,
    });
    try {
      const payload = await api.delete(`${customers}/${id}`);
      dispatch({
        type: ActionTypes.DELETE_USER,
        payload: id,
      });
    } catch (err) {
      return err;
    }
  };
};
