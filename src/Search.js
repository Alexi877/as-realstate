import React, {Component} from 'react';
import GoogleMap from './GoogleMap';
import Navbar from './Navbar';
import HomeList from './HomeList';
import {lowval, highval} from './Navbar'; // use context api instead


class Search extends Component {
	render() {
		const {lowval, highval} = this.props;
	return (
	<div className = "search-main container-fluid">
		<div className="row" >
		<Navbar />
		<div className = "text-left col-xs-4 ">
		
			<GoogleMap /> 

		 </div>
		  <div className="row d-inline-flex">
		 <div className = "search-right col-xs-8">
		<HomeList />
		</div>
		 </div>
		 </div>
		
	 
	</div>
	);
	}
}

export default Search;
