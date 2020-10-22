import * as ActionTypes from '../constants';

let initialState = {
  customers: [],
};

const customerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_USER_LIST:
      state.customers = action.customers;
      return {...state};
    default:
      return {...state};
  }
};

export default customerReducer;
