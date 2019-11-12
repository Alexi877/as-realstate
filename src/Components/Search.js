import React, {Component} from 'react';
import GoogleMap from './GoogleMap';
import Navbar from './Navbar';
import HomeList from './HomeList';
import {Homes} from '../data.js';
import DropDown from './DropDown.js'

class Search extends Component {

	constructor() {
		super();
		this.state={
			lowval: '',
			highval: '',
			homes: Homes,
			drop:false,
			beds: '',
			baths: '',
			squarefeet:'',
			location:'',
			addedfilter:''
		};
	}
/*onHandleChange is a callback handler, which notifies the parent of changes in the child component */
	onHandleChange = ({target}) =>{
		this.setState({ [target.name]: target.value});
	};
	onHandleBeds = ({target}) =>{
		this.setState({ beds: target.value});
	};
	onHandleBaths = ({target}) =>{
		this.setState({ baths: target.value});
	};
	onHandleSqft = ({target}) =>{
		this.setState({ squarefeet: target.value});
	};
	onHandleLocation = ({target}) =>{
		this.setState({ location: target.value});
	};
	onHandleFilter = ({target}) =>{
		this.setState({ addedfilter: target.value});
	};
	onDropFilterChange = (addedfilter) => {
		if (addedfilter === 'open') {
			this.setState({drop: true})
		} else if (addedfilter === 'close') {
			this.setState({drop: false})
		}
		this.setState({addedfilter:addedfilter})
	}

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
		<Navbar className = "col-12" handleFilter={this.onDropFilterChange} handleChange = {this.onHandleChange}
		 /> 
		<div className = "gogl-map d-none d-sm-block col-3">
			<GoogleMap /> 
		 </div>	  
		 <div className = "col-9">
		 { this.state.drop ? (
		 <DropDown handleBed={this.onHandleBeds} 
		 handleBath={this.onHandleBaths}
		 handleSqft={this.onHandleSqft}
		 handleLocation={this.onHandleLocation}
		 handleFilter={this.onDropFilterChange}
		 />) : ('')
		 	}
		<HomeList Homes = {rangedHomes} />
		</div>
		 </div>	 
	</div>
	);
	}
}

export default Search;
