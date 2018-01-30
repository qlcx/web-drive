import React from 'react';
import { Provider } from 'mobx-react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import stores from './stores';

import Login from './views/Login';
import Buckets from './views/Buckets';

import './styles/main.css';
import './styles/normalize.css';

const router = () => (
  <Provider {...stores}>
    <Router>
      <main>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/buckets' component={Buckets} />
        </Switch>
      </main>
    </Router>
  </Provider>
);

export default router;