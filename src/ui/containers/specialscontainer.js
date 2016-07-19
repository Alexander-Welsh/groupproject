import React from 'react';
import Specials from 'ui/specials';
import { getSpecials } from 'api/specialsapi';

export default React.createClass({
	getInitialState: function() {
		return {
			specials: []
		}
	},
	componentWillMount: function() {
		getSpecials().then(function(response) {
			this.setState({
				specials: response.data
			})
		}.bind(this)).catch(function(err) {
			console.error(err);
		});
	},
	render: function() {
		return (
			<Specials specials={this.state.specials} />
		)
	}
});