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
			this.setState({
				appetizer:response.data.appetizers,
				entree:response.data.entrees,
				sides:response.data.sides
			})
		}.bind(this))
	},
	slider: function(){
		var data = document.getElementsByClassName('finder');
		console.log(data)
	for (var i = 0; i < data.length; i++) {
			data[i].onclick =function(){
				this.nextElementSibling.classList.toggle("show");
    	}
    	}
	},
  render: function () {
    return (
      <div id="menuContainer">
      	<h1>Dinner Menu</h1>
      	<h2 className="finder"onClick={this.slider} title="Click to Open/Close"> Appetizers:</h2>
      	<div className="accord show">
      		<Apps apps={this.state.appetizer} />
      	</div>
      	<h2 className="finder" onClick={this.slider} title="Click to Open/Close"> Entrees: </h2>
      	<div className="accord">
      		<Entree entree={this.state.entree} />
      	</div>
      	<h2 className="finder" onClick={this.slider} title="Click to Open/Close"> Sides: </h2>
      	<div className="accord">
      		<Side sides={this.state.sides} />
      	</div>

      </div>
    )
  }
})