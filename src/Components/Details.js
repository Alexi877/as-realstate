import React, {Component} from 'react';
import {Homes} from '../data';
import Navbar from './Navbar';

class Details extends Component{
	constructor(props) {
		super(props);
		this.state ={
			homes:Homes,
			openId: this.props.match.params.id,
			
		}
	}
	componentDidMount () {
		const {id} = this.props.match.params;
	}
	render() {
	let openHome = this.state.homes.filter(home =>{ 
		return home.id == this.state.openId})[0];
	//we add [0] so it returns the object in the array alone outside an array
	console.log('state is' + JSON.stringify(openHome));
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
		   <img src={openHome.img} alt ="Home at adress:"/>
		   <h3>${openHome.price}</h3>
		   
		   <div className='info'>
		    <p><span>Beds</span> {openHome.beds}</p>
		    <p><span>Baths</span> {openHome.baths}</p>
		    <p><span>Squarefeet</span> {openHome.sqft}</p>
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