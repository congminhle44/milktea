import * as ActionTypes from './constants';

let initialState = {
  payload: [],
  loading: false,
  page: null,
  customersSearch: [],
};

const customerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.GET_USER:
      state.loading = action.loading;
      state.page = action.page;
      return {
        ...state,
        loading: false,
        payload: [...state.payload, ...action.payload],
      };

    case ActionTypes.SEARCH_USER:
      state.customersSearch = action.customersSearch;
      return {...state, loading: false};

    case ActionTypes.CREATE_USER:
      return {
        ...state,
        payload: [...state.payload, action.payload],
        loading: false,
      };

    case ActionTypes.EDIT_USER:
      return {
        ...state,
        loading: false,
      };
    case ActionTypes.DELETE_USER:
      return {
        ...state,
        loading: false,
      };

    default:
      return {...state};
  }
};

export default customerReducer;
