import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore }                  from 'react-router-redux';
import { browserHistory }                        from 'react-router'
import rootReducer                               from '../reducers/root-reducer';
import jwtDecode                                 from 'jwt-decode';
import thunk                                     from 'redux-thunk';
import { setCurrentUser }                        from '../actions/auth-actions';

const defaultState = {

};

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export const history = syncHistoryWithStore(browserHistory, store);


if (localStorage.sessionToken) {
  store.dispatch(setCurrentUser(jwtDecode(localStorage.sessionToken)));
}

export default store;
