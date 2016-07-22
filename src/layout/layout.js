import React from 'react';
import {Link} from 'react-router'


//layout
import Logo from 'ui/logo'
import Social from 'ui/social'


export default React.createClass({

  render: function () {
    return (
      <div>
        <Logo />
        <Social />
        <Link to="/" className="links"> Our Story</Link>
        <Link to="/menu" className="links"> Menu</Link>
        <Link to="/reservation" className="links">Reservation</Link>

      
        

        {this.props.children}
        
      </div>
    )
  }
})


