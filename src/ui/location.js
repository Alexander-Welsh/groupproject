import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="specials">
        <h1>Todays's Specials</h1>
          {this.props.specials.map(function(user) {
      return (
        <p key={specials.id}>{specials.menu_item_id}></p>
            );
          })}
      </div>
    )
  }
});