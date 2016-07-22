import React from 'react';

export default React.createClass({
	setInitialState: function(){
		return{
			vegan:"",
			spicy:""
		}
	},
	componentWillMount:function(){

		this.setState({
			vegan:this.props.vegan,
			spicy:this.props.spicy,
			favorite:this.props.favorite,
			allergies:this.props.allergies
		})
	
	},
	componentDidMount:function(){
		var vegan = this.state.vegan
		var spicy = this.state.spicy
		var favorite = this.state.favorite
		var allergies= this.state.allergies
		if(vegan === 1){
			this.setState({
				vegan: <img id="vegan"src="https://graysuede.files.wordpress.com/2014/02/vegan-symbol.png"/>
			})
		}else{
			this.setState({
				vegan:null
			})
		}
		if(spicy === 1){
			this.setState({
				spicy: <img id="spicy" src="https://cdn4.iconfinder.com/data/icons/eldorado-food-1/40/pepper_chili-512.png"/>
			})
		}else{
			this.setState({
				spicy:null
			})
		}
		if(favorite=== 1){
			this.setState({
				favorite: <img id="favorite" src="http://www.pd4pic.com/images/star-favorite-bookmark-3d-gold-yellow.png"/>
			})
		}else{
			this.setState({
				favorite:null
			})
		}
		if(allergies ===1){
			this.setState({
				allergies: <img id="allergies" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/24630c10456595.560e535f66821.png"/>
			})
		}else{
			this.setState({
				allergies:null
			})
		}
	},
  render: function () {
    return (
     	<div>
     		<p><span className="foodTitle">{this.props.name}</span>: {this.props.price}</p>
     		<p><span>{this.state.spicy}</span> <span>{this.state.vegan}</span> 
     		<span>{this.state.favorite}</span> <span>{this.state.allergies}</span>
	  		</p>
     		<p>{this.props.description}</p>

     	</div>
    )
  }
})