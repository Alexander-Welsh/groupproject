import React from "react";

// import Entree from "ui/entree";
//does not import container//
//import { hashHistory } from 'react-router'; if incorpating a back button//
export default React.createClass({
	render: function () {
		return (
				<div className="infoboxes">
				<h4> Today's Specials </h4>
				<hr className="hr"/>	
				<img className = "salmon" src="src/assets/images/salmon.jpg" />	
				<p className ="boxstyle" id="specials"> <span className="left"> 12oz Atlantic Sea Scallops </span> <span className="right"> 28 </span> </p>
				<br />
				<p className ="boxstyle" id="specials"> "All natural colossal ocean pillows of love, 95% harvested are unnaturally pumped to plump, we are the 5%. </p>
					
			</div>
			)
		}
	})