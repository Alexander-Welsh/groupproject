import React from 'react';
import Side from 'ui/side'

export default React.createClass({
  render: function () {
    return (
      <div>
       	{this.props.sides.map(function(item){
      		return <Side key={item.id} id={item.id} favorite={item.favorite} spicy={item.spicy} allergies={item.allergies} vegan={item.vegan} name={item.item} description={item.description} price={item.price} />
      	})}
       	</div>
    )
  }
})