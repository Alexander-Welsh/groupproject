import React from 'react';
import {getMenu} from 'api/restdata'

import Apps from 'ui/appscont'
import Entree from 'ui/entreecont'
import Side from 'ui/sidecont'

export default React.createClass({
	getInitialState: function(){
		return{
		appetizer: [],
		entree: [],
		sides: []
	}
	},
	componentWillMount: function(){
		getMenu().then(function(response){
			console.log(response)
			this.setState({
				appetizer:response.data.appetizers,
				entree:response.data.entrees,
				sides:response.data.sides
			})
		}.bind(this))
		console.log(this.state.appetizer)
	},

  render: function () {
    return (
      <div>

      	<h1>This is the Menu</h1>
      	<h2> Appetizers</h2>
      	<Apps apps={this.state.appetizer} />
      	<h2> Entrees </h2>
      	<Entree entree={this.state.entree} />
      	<h2> Sides A La Carte </h2>
      	<Side sides={this.state.sides} />


      </div>
    )
  }
})