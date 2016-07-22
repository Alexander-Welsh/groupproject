import React from 'react';

export default React.createClass({
	
	handleSubmit: function(e){
		e.preventDefault()
		var name = this.refs.name.value
		var guests = this.refs.guests.value
		var date = this.refs.date.value
		var select = this.refs.select.value
		var textarea = this.refs.notes.value
		console.log(name, guests, date, textarea, select )

		var form = this.refs.form.reset()

		window.confirm("Are you sure you want to book this table?")
		
		

	},
	componentDidMount:function(){
		this.refs.name.focus()
	},
  render: function () {
    return (
      <div>
      	<p>Reservation</p>
      <div id="registration">
      	<h1> Reservation </h1>
      		<form id="form" ref="form" onSubmit={this.handleSubmit}>
      			Full Name <br />
		      	<input type="text" ref="name"/><br />
		      	Number of Guests <br />
		      	<input type="number"ref="guests" max="12"/><br />
		      	Date <br />
		      	<input type="date" ref="date" /><br />
		      	Special Notes <br />
		      	<textarea ref="notes"/><br />
		      	Seating Preference<br />
				<select ref="select">
					<option defaultValue="selected">No Preference</option>
					<option> Indoor</option>
					<option> Outdoor</option>
				</select> <br />
				<button type="submit">Reserve Table</button>

      		</form>
      </div>
      </div>
    )
  }
})