import * as ActionTypes from './constants';

let initialState = {
  customers: [],
  userObject: {},
  loading: true,
  page: null,
  customersSearch: [],
};

const customerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_USER_LIST:
      state.customers = action.customers;
      state.loading = action.loading;
      return {...state};

    case ActionTypes.GET_LAST_PAGE:
      state.page = action.page;
      return {...state};

    case ActionTypes.GET_USER_SEARCH:
      state.customersSearch = action.customersSearch;
      return {...state};

    case ActionTypes.CREATE_USER:
      state.userObject = action.userObject;
      return {...state};

    default:
      return {...state};
  }
};

export default customerReducer;
