import React from "react";
// import Entree from "ui/entree";
//does not import container//
//import { hashHistory } from 'react-router'; if incorpating a back button//


export default React.createClass({
	render: function(){
		return (
//filter array for id, item, price,description//
			// {this.props.entree}.filter() {
			// 	return <

			// }
			<div className="infoboxes">
				<h2>Today's Specials</h2>
				<hr />
				<p className ="boxstyle" id="specials"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, modi. </p>
				
			</div>
		)
	}
})