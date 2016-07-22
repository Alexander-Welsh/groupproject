import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import Layout from 'layout/layout';



// UI
import Story from 'ui/storycontainer';
import Menu from 'ui/menu'
import Reservation from 'ui/reservation'


const Site = (  // paths are for links only// //component is for the page//
  <Router history={hashHistory}>
    <Route component={Layout}> 
    <Route path="/" component={Story} />
      <Route path="/menu" component={Menu} />
      <Route path="/reservation" component= {Reservation} />
    </Route>
  </Router>
);

render(Site, document.getElementById('app'));
//the main file is for bringing the pages an links together//