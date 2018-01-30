import React from 'react';
import { Provider } from 'mobx-react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/main.css';
import './styles/normalize.css';

import stores from './stores';

import Login from './views/Login';

const router = () => (
  <Provider {...stores}>
    <main>
      <Login />
    </main>
  </Provider>
);

export default router;