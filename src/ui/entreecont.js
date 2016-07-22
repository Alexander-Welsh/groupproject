import React from 'react';
import Dinner from 'ui/apps'

export default React.createClass({
  render: function () {
    return (
    	<div>
       	{this.props.entree.map(function(item){
      		return <Dinner key={item.id} id={item.id} favorite={item.favorite} spicy={item.spicy} allergies={item.allergies} vegan={item.vegan} name={item.item} description={item.description} price={item.price} />
      	})}
      	
       	</div>
    )
  }
})