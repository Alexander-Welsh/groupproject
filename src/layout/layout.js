import React from 'react';
import {Link} from 'react-router';
import Pictures from "ui/pictures";
import News from "ui/news";
import Specials from "ui/specials";
import Location  from "ui/location";
import Menu  from "ui/menu";
import Reservation  from "ui/reservation";
import Story  from "ui/story";


//layout
import Logo from 'ui/logo'
import Social from 'ui/social'


export default React.createClass({

  render: function () {
    return (
      <div>
      <Logo />
      <Social />
         <img id="mainphoto" src="http://www.luxlifemag.com/wp-content/uploads/2013/01/CSC_0955-994x350.jpg" />
        
        
      <div className="infocont">
        <News />
        <Specials />
        <Location />
      </div>
        <div id="linkcont">
        <Link to="/" className="links"> Our Story</Link>
        <Link to="/menu" className="links"> Menu</Link>
        <Link to="/reservation" className="links">Reservation</Link>
        </div>
        <Pictures />

      
        


        {this.props.children}
        
      </div>
    )
  }
})
