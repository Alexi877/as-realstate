import React, {Component} from 'react';
import {Homes} from '../data';
import Navbar from './Navbar';
import 'font-awesome/css/font-awesome.min.css';

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
	setFavorite = (homeId) =>{
		this.setState({
			favorite:!this.state.favorite
		}, this.homeFavorited(homeId));

	}
	homeFavorited = (homeId)=>{
		if(!this.state.favorite){
			this.setState({
				favoriteId: homeId
			}); 
		} else {
			this.setState({
				favoriteId: null
			})
		}
		
	}
	componentDidMount () {
		const {id} = this.props.match.params;
	}
	render() {
	let openHome = this.state.homes.filter(home =>{ 
		return home.id == this.state.openId})[0];
	//we add [0] so it returns the object in the array alone outside an array
	let homeid=this.state.favoriteId;
	console.log('state is' + this.state.favoriteId + this.state.favorite);
	return(
		<div className="container-fluid details-page">
		 <div className='row'>
		  <div className='col-12 Navbar'>
		   <Navbar showFilter={`Don't show`}/>
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
			<button onClick={this.setFavorite.bind(null, openHome.id)} className="btn btn-warning">
			{ this.state.favorite===true ?
			<span className="fa fa-star fa-lg"> Favorited!</span> 
			:(
				<span className="fa fa-star-o fa-lg"> Favorite</span>
			)
			}
			</button>
		    </div>
		   <p className='description'>Description: {openHome.info}</p>
		   </div>
		  <div className="col-1"></div>
		 </div>
		</div>
		)
	}
}
export default Details;