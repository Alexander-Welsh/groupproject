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
<<<<<<< HEAD
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
=======
        <Logo />
        <Social />
        <Link to="/" className="links"> Our Story</Link>
        <Link to="/menu" className="links"> Menu</Link>
        <Link to="/reservation" className="links">Reservation</Link>

      
        
>>>>>>> 1ad4453032f43afef93578092f8f4ada26522c54

        {this.props.children}
        
      </div>
    )
  }
})
<<<<<<< HEAD
=======


>>>>>>> 1ad4453032f43afef93578092f8f4ada26522c54
