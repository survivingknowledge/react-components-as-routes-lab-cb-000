import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

// routes
import routes from './routes';

// components
import Actors from './components/Actors';
import App from './components/App';
import Directors from './components/Directors';
import Home from './components/Home';
import Movies from './components/Movies';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
