import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

// Layout
import Layout from 'layout/layout';

// UI
import Story from 'ui/story';
import Menu from 'ui/menu'
import Reservation from 'ui/reservation'

const Site = (
  <Router history={hashHistory}>
    <Route component={Layout}>
      <Route path="/" component={Story} />
      <Route path="/menu" component={Menu} />
      <Route path="/reservation" component= {Reservation} />
    </Route>
  </Router>
);

render(Site, document.getElementById('app'));