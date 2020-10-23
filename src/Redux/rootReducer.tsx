import {combineReducers} from 'redux';
import customerReducer from './Customers/reducer';

const rootReducer = combineReducers({customerReducer});

export default rootReducer;
