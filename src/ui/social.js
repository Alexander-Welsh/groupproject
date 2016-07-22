import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div id="social">
      	<p> Follow Us: </p>
      	<a href="https://google.com" target="_blank"><img className="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-google-plus-32.png"/></a>
      	<a href="https://facebook.com" target="_blank"><img className="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-32.png"/></a>
      	<a href="https://twitter.com" target="_blank"><img className="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-twitter-32.png"/></a>
      </div>
    )
  }
})