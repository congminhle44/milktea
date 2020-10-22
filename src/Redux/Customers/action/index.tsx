import {api} from '../../../api';

import * as ActionTypes from '../constants';

export const getCustomerListApi = () => {
  return (dispatch: any) => {
    api
      .get('/customers')
      .then((customers) => {
        dispatch({
          type: ActionTypes.GET_USER_LIST,
          customers: customers.data,
        });
      })
      .catch((err) => {
        return err;
      });
  };
};
