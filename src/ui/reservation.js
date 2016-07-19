import React from 'react';

export default React.createClass({
	
	handleSubmit: function(e){
		e.preventDefault()

	},
  render: function () {
    return (
      <div>
      	<h1> Reservation </h1>
      		<form>
      			Full Name <br />
		      	<input type="text" className="dog"/><br />
		      	Number of Guests <br />
		      	<input type="number" min="1" max="12"/><br />
		      	Date <br />
		      	<input type="date" /><br />
				<select>
					<option> Indoor</option>
					<option> Outdoor</option>
				</select> <br />
				<button onClick={this.handleSubmit} type="submit">Reserve Table</button>

      		</form>
      </div>
    )
  }
})