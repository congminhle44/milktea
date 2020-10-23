import {api} from '../../config/api/baseUrl';

import {customers} from '../../config/api/baseUrl/customer';

import * as ActionTypes from './constants';

export const getCustomerListApi = () => {
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
