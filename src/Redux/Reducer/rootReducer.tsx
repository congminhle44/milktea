import {combineReducers} from 'redux';
import customerReducer from '../Customers/Reducer';

const rootReducer = combineReducers({customerReducer});

export default rootReducer;
