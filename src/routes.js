import React                         from 'react';
import PropTypes                     from 'prop-types';
import { Provider }                  from 'react-redux';
import { IndexRoute, Router, Route } from 'react-router';
import Main                          from './components/main';
import LoginPage                     from './components/login/login-page';
import SearchPage                    from './components/search/search-page';
import store, { history }            from './store/store';

const requireLogin = (nextState, replace, cb) => {
        const { auth } = store.getState();
        if (!auth.isAuthenticated) {
            replace('/');
        }
        cb();
};




const routes = (
    <Provider store={store}>
      <Router history={history}>
          <Route path="/" component={Main}>
              <IndexRoute component={LoginPage} />
              <Route path="login" component={LoginPage} />
                <Route onEnter = {requireLogin}>
                    <Route path="search" component={SearchPage} />
                </Route>
          </Route>
      </Router>
    </Provider>
);

export default routes;
