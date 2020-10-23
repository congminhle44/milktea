import * as ActionTypes from './constants';

let initialState = {
  customers: [],
  loading: true,
};

const customerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_USER_LIST:
      state.customers = action.customers;
      state.loading = action.loading;
      return {...state};
    default:
      return {...state};
  }
};

export default customerReducer;
