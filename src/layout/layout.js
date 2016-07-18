import React from 'react';
import {Link} from 'react-router'


export default React.createClass({
  render: function () {
    return (
      <div>
        <img id="logo" src="http://static.vecteezy.com/system/resources/previews/000/000/624/original/red-wine-bottle-vector.jpg" />
        <Link to="/"> Our Story</Link>
      	<Link to="/menu"> Menu</Link>
      	<Link to="/reservation">Reservation</Link>

        {this.props.children}
      </div>
    )
  }
})