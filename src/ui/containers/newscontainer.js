import React from 'react';
import News from 'ui/news';
import { getNews } from 'api/user';

export default React.createClass({
	getInitialState: function() {
		return {
			news: []
		}
	},
	componentWillMount: function() {
		getNews().then(function(response) {
			this.setState({
				news: response.data
			})
		}.bind(this)).catch(function(err) {
			console.error(err);
		});
	},
	render: function() {
		return (
			<News news={this.state.news} />
		)
	}
});