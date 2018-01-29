import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/main.css';
import './styles/normalize.css';

import Login from './views/Login';

const router = () => (
  <div>
    <Login />
  </div>
);

export default router;