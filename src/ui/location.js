import React from 'react';

export default React.createClass({
  render: function() {
    return (
     <div className="infoboxes">
        <h2> Our Loaction </h2>
  			<hr />	
    		 <div className="google"> 
          <iframe width="300" height="250" frameBorder="0" style={{border:"0"}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJy6FEsprDyIARuQKsh8g7_B8&key=AIzaSyDi3YKBSUltQvZjBzJIoVmcUdSn41b1yVI" allowFullScreen>
          </iframe>
         </div>
          <div className="footer"> <p className="address">  
1017 South First Street, Las Vegas, NV 89101</p>
      <p className="address">  555-432-3441  -  555-432-3441  -  Map  -  Directions  </p>
        </div>
	</div>
    )
  }
});
//for google maps api-must use key can reuse same key-must fix syntax in link to read for React, the error message will show how//

//also, add maps.google....script to html page//

// var Iframe = require("react-iframe");

// <Iframe url=""https:"www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12884.354200603446!2d-115.1474018024574!3d36.16439976269832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37e8307f61b99759!2sMundo+at+Mingo!5e0!3m2!1sen!2sus!4v1469128453305" [string width, [string height]] />
