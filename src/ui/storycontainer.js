import React from 'react';
import OurStory from 'ui/story';
import { getNews } from 'api/restdata'

export default React.createClass({
	getInitialState: function(){
		return{
			story:""
		}
	},
	componentWillMount: function(){
		getNews().then(function(response){
			console.log(response)
			this.setState({
				story:response.data.post
			})
		}.bind(this))
	},
  render: function () {
    return (
      <div>
        <h1>Our Story</h1>

        <OurStory story={this.state.story} />
      </div>
    )
  }
})  