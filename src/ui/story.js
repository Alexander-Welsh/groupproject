import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div>
      	<p>{this.props.story}</p>
      	<img id="storypic" src="https://pixabay.com/static/uploads/photo/2013/09/16/18/50/guest-room-182927_960_720.jpg"/>
      	<p>Our story begins in the meadows of Las Vegas, a silly place.  This locally owned Italian style restaurant serves the best food in town.  Come visit when in town!</p>
      </div>
    )
  }
})