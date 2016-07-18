import React from 'react';

export default React.createClass({
  render: function () {
    return (
     	<div>
     		<p>{this.props.name} {this.props.price}</p>
     		<p>{this.props.description}</p>

     	</div>
    )
  }
})