import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import Layout from 'layout/layout';
<<<<<<< HEAD
import Story from 'ui/story';
import Menu from 'ui/menu';
import Reservation from 'ui/reservation';// import Location from 'ui/location';
// import Specialscontainer from "ui/specialscontainer";
import Specials from "ui/specials";

=======

// UI
import Story from 'ui/storycontainer';
import Menu from 'ui/menu'
import Reservation from 'ui/reservation'
>>>>>>> 1ad4453032f43afef93578092f8f4ada26522c54

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