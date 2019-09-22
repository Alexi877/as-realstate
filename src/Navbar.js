import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
	
	constructor(props) {
		super(props);
		this.state={
			lowval: '',
			highval: ''
		};
	}
	handleChange = ({target}) =>{
		this.setState({ [target.name]: Number(target.value)});
	};

render() {
	return(
	<div className = "Navbar container-fluid">
	 <div className="row">
	 <div className = "col-xs-12">
	 	<div className="Navbarform">
	 <div className="homebutton">
	   <Link to="/"><button className="btn btn-danger">Home</button>
	   </Link>
	 </div>
	 	<form className="navigation">
	 	Price:
	 	 <input 
	 	 className ="homevalue" 
	 	 align="right" 
	 	 type ="text" name="lowval" size ="5"
	 	 value= {this.state.lowval}
	 	 onChange = {this.handleChange}
	 	 />
	 	 To:
	 	 <input 
	 	 className="homevalue" 
	 	 align="right" 
	 	 type ="text" name="highval" size ="5"
	 	 onChange = {this.handleChange}
	 	 value= {this.state.highval}/>
	 	</form>
	 	<h3> low:{this.state.lowval}
	 	high: {this.state.highval} </h3>
	 	</div>


	 </div>
	 </div>
	</div>
	)
}
}

export default Navbar;