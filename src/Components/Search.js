import React, {Component} from 'react';
import GoogleMap from './GoogleMap';
import Navbar from './Navbar';
import HomeList from './HomeList';
import {Homes} from '../data.js';

class Search extends Component {

	constructor() {
		super();
		this.state={
			lowval: '',
			highval: '',
			homes: Homes
		};
	}
/*onHandleChange is a callback handler, which notifies the parent of changes in the child component */
	onHandleChange = ({target}) =>{
		this.setState({ [target.name]: target.value});
	};
	
	
	render() {
		const {homes, lowval, highval} = this.state;
		const rangedHomes = homes.filter(home => { /* begin with home.price to compare values as a price in between won't work */
		if (lowval.length>=0 && highval.length>0 ) {
		return home.price <= highval && home.price >= lowval;
	} else {
		return (homes);
	}
	})
	return (
	<div className = "container-fluid">
		<div className="row" >
		{/*<h1>low: {this.state.lowval}</h1>
		<h1>high: {this.state.highval}</h1> */}
		<Navbar className = "col-12" handleChange = {this.onHandleChange} /> 
		<div className = "gogl-map col-3">
			<GoogleMap /> 
		 </div>	  
		 <div className = "col-9">
		<HomeList Homes = {rangedHomes} />
		</div>
		 </div>	 
	</div>
	);
	}
}

export default Search;
