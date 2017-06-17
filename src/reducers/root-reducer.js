import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import auth                from './auth';
import search              from './search';
import select              from './select';

const rootReducer = combineReducers({auth, search, select, routing : routerReducer});

export default rootReducer;

