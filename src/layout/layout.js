import React from 'react';
import {Link} from 'react-router';
import Pictures from "ui/pictures";
import News from "ui/news";
import Specials from "ui/specials";
import Location  from "ui/location";
import Menu  from "ui/menu";
import Reservation  from "ui/reservation";
import Story  from "ui/story";


export default React.createClass({
  render: function () {
    return (
      <div>
        <Pictures />
        
      <div className="infocont">
        <News />
        <Specials />
        <Location />
      </div> 
       
        <img id="logo" src="http://static.vecteezy.com/system/resources/previews/000/000/624/original/red-wine-bottle-vector.jpg" />
        <Link to="/"> Our Story</Link>
        <Link to="/menu"> Menu</Link>
        <Link to="/reservation">Reservation</Link>

        {this.props.children}
      </div>
    )
  }
})
