import * as ActionTypes from './constants';

let initialState = {
  customers: [],
  userObject: {},
  loading: true,
};

const customerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_USER_LIST:
      state.customers = action.customers;
      state.loading = action.loading;
      return {...state};
    case ActionTypes.CREATE_USER:
      state.userObject = action.userObject;
      return {...state};
    default:
      return {...state};
  }
};

export default customerReducer;
