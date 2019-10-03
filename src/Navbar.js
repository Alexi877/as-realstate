import React from 'react';
import {Link} from 'react-router-dom';

const Navbar =({handleChange}) => {
	



	return(
	<div className = "Navbar container-fluid">
	 <div className="row">
	 <div className = "col-xs-12">
	 	<div className="Navbarform">
	 <div className="homebutton d-inline-flex">
	   <Link to="/"><button className="btn btn-danger">Home</button>
	   </Link>
	 </div>
	 	<form className="navigation d-inline-flex">
	 	Price:
	 	 <input 
	 	 className ="homevalue" 
	 	 align="right" 
	 	 type ="text" name="lowval" size ="5"
	 	 
	 	 onChange = {handleChange}
	 	 />
	 	 To:
	 	 <input 
	 	 className="homevalue" 
	 	 align="right" 
	 	 type ="text" name="highval" size ="5"
	 	 onChange = {handleChange}
	 	 />
	 	</form>
	 	</div>


	 </div>
	 </div>
	</div>
	)

}

export default Navbar;