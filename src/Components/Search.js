import React, {Component} from 'react';
import GoogleMap from './GoogleMap';
import Navbar from './Navbar';
import HomeList from './HomeList';
import DropDown from './DropDown.js'
import {connect} from 'react-redux';

class Search extends Component {

	constructor() {
		super();
		this.state={
			lowval: '',
			highval: '10000000',
			drop:false,
			beds: '',
			baths: '',
			squarefeet:'',
			location:'',
			addedfilter:'',
			sortby: '',
			sort: ''
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
	onHandleSort = ({target}) => {
		this.setState({sortby: target.value});
	};
	onDropFilterChange = () => {
		this.setState({drop:!this.state.drop})
	}

	render() {
		const homes = this.props.homes;
		const {lowval, highval, beds, baths, squarefeet, location} = this.state;
		let rangedHomes = homes.filter(home => { /* begin with home.price to compare values as a price in between won't work */
		if (lowval.length>=0 && highval.length>0 && beds.length>=0 && baths.length>=0 && squarefeet.length>=0 && location.length>=0) {
		return home.price <= highval && home.price >= lowval && home.beds>= beds && home.baths>= baths && home.sqft>= squarefeet && home.address.toLowerCase().includes(location.toLowerCase());
	} else {
		return (homes);
	}
	})
	// Conditional Statements for select option
	// a-b is the same as a>=b to sort in ascendign order for chrome.
	if(this.state.sortby === 'price' ) {
		rangedHomes = rangedHomes.sort((a, b) => {
			return a.price - b.price;
		})
	}  else if(this.state.sortby === 'beds' ) {
		rangedHomes = rangedHomes.sort((a, b) => {
			return a.beds - b.beds;
		})
	}  else if(this.state.sortby === 'sqft' ) {
		rangedHomes = rangedHomes.sort((a, b) => {
			return a.sqft - b.sqft;
		})
	} else if(this.state.sortby === 'clear' ) {
		rangedHomes = rangedHomes.sort((a, b) => {
			return a.id - b.id;
		})
	}

	return (
	<div className = "container-fluid">
		<div className="row" >
		<Navbar className = "col-12" sortby={this.state.sortby} handleSort={this.onHandleSort} handleFilter={this.onDropFilterChange} handleChange = {this.onHandleChange} showFilter={'show'}
		 /> 
		<div className = "gogl-map d-none d-sm-block col-3">
			<GoogleMap /> 
		 </div>	  
		 <div className = "col-md-9 col-sm-9 col-12">
		 { this.state.drop ? (
		 <DropDown
		 handleChange = {this.onHandleChange} 
		 handleBed={this.onHandleBeds} 
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

const mapStateToProps = (state) =>{
	console.log(state);
	return state
}




export default connect(mapStateToProps)(Search);
