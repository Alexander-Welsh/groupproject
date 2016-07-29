import React from 'react';
import OurStory from 'ui/story';
// import { getNews } from 'api/restdata'

export default React.createClass({
	
  render: function () {
    return (
      <div id="storyContainer">
        <h1>Our Story</h1>

        <OurStory />
      </div>
    )
  }
})  