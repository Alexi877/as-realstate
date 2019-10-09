import React from 'react';
import {Link} from 'react-router-dom';

const Navbar =({handleChange}) => {
	



	return(
	<div className = "Navbar container-fluid">
	 <div className="row">
	 <div className = "col-2">
	 	<div className="Navbarform">
	 <div className="homebutton d-inline-flex">
	   <Link to="/"><button className="btn btn-danger">Home</button>
	   </Link>
	 </div>
	 </div>
	 </div>
	 	<div className="col-10 text-right">
	 	<form className="navigation form-horizontal d-inline-flex"> 
	 	<label>Searh by Price: Low</label>
	 	 <div className="form-inline">
	 	 <input 
	 	 className ="homevalue" 
	 	 align="right" 
	 	 type ="text" name="lowval" size ="5"
	 	 
	 	 onChange = {handleChange}
	 	 />
	 	 <label>High:</label>
	 	 <input 
	 	 className="homevalue" 
	 	 align="right" 
	 	 type ="text" name="highval" size ="5"
	 	 onChange = {handleChange}
	 	 />
	 	 </div>
	 	</form>
	 	</div>
	 	</div>


	 </div>
	 
	)

}

export default Navbar;