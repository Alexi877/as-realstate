import React, {Component} from 'react';
import {Homes} from '../data';
import Navbar from './Navbar';
import 'font-awesome/css/font-awesome.min.css';
import {connect} from 'react-redux';
import {addFavorite, removeFavorite} from '../redux/actions';


class Details extends Component{
	constructor(props) {
		super(props);
		this.state ={
			homes:Homes,
			openId: this.props.match.params.id,
			favorite: false,
			favoriteId: null
		}
	}
	// Adds favorite to  favorites array and updates the UI.
	setFavorite = (homeId) =>{
		this.setState({
			favorite:!this.state.favorite
		}, 
		this.homeFavorited(homeId));
		this.props.addFavorite(homeId)

	}
	//gets ID of homes to favorite so it can be sent to favorites array.
	homeFavorited = (homeId)=>{
		if(!this.state.favorite){
			this.setState({
				favoriteId: homeId
			}); 
		} else {
			this.setState({
				favoriteId: null
			})
		};
		
		
	}
	
	render() {
	let openHome = this.state.homes.filter(home =>{ 
		return home.id == this.state.openId})[0];
	//we add [0] so it returns the object in the array alone outside an array
	let homeid=this.state.favoriteId;
	return(
		<div className="container-fluid details-page">
		 <div className='row'>
		  <div className='col-12 Navbar'>
		   <Navbar showFilter={`Don't show`} showSignIn={'show'}/>
		  </div>
		 </div>
		 <div className="row">
		  <div className="col-1"></div>
		   <div className="col-10">
		   <h3 className="header">{openHome.address}</h3>
		   <img src={openHome.img} alt ="Home at address:"/>
		   <h3>${openHome.price}</h3>
		   
		   <div className='info'>
		    <p><span>Beds</span> {openHome.beds}</p>
		    <p><span>Baths</span> {openHome.baths}</p>
		    <p><span>Squarefeet</span> {openHome.sqft}</p>
			
			{ this.props.favorites.includes(openHome.id) ?
			<button onClick={() => this.props.removeFavorite(openHome.id)} className="btn btn-warning"><span className="fa fa-star fa-lg"> Favorited!</span></button>
			:(
				<button onClick={this.setFavorite.bind(null, openHome.id)} className="btn btn-warning"><span className="fa fa-star-o fa-lg"> Favorite</span> </button>
			)
			}
			
		    </div>
		   <p className='description'>Description: {openHome.info}</p>
		   </div>
		  <div className="col-1"></div>
		 </div>
		</div>
		)
	}
}
//We get the state from redux so we can use it later on
const mapStateToProps = (state) =>{
	console.log(state.homes);
	return state
}
//These are the actions we are trying to dispatch in order to update the redux state.
const mapDispatchToProps = {
	addFavorite: addFavorite,
	removeFavorite: removeFavorite
}

export default connect(mapStateToProps,mapDispatchToProps)(Details);