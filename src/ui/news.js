import React from 'react';
import { getNews } from 'ui/api/axios';

export default React.createClass({
	getInitialState: function() {
		return {
			title: "",
			date_published: "",
			news: ""   //the api infowas plain data and not an array. if it was an array use news: [] and also add a mapping/filer... function
		}
	},
	componentWillMount: function() {
		getNews().then(function(response) {
			// console.log(response)
			this.setState({
				
				title: response.data.title, 
				date_published: response.data.date_published,
				news: response.data.post
			})
		}.bind(this))
	},
	render: function() {
		return (
			<div className="infoboxes">
				<h4> Latest News </h4>
				<hr className="hr"/>		
				<p className ="boxstyle" id="news"> <span className="left"> {this.state.title} </span> <span className="right">{this.state.date_published} </span> </p>
				<br />
				<p className ="boxstyle" id="news"> {this.state.news} </p>
					
			</div>
		)
	}
});


// this file is the component and the the states together instead of having a container file, because the api was data only and not an array, container was not really needed.//