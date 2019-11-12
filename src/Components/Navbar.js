import React from 'react';
import {Link} from 'react-router-dom';

const Navbar =({handleChange, handleFilter}) => {
	



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
	 	<div className="col-10">
	 	<div className="text-right">
	 	<form className="navigation form-horizontal d-inline-flex">
	 		 	<input 
	 	 className ="filtervalue" 
	 	 align="left" 
	 	 type ="button" name="addedfilter" value="+filters" size ="2"
	 	 onClick={() => handleFilter('open')}
	 	 placeholder = "Low"
	 	 />
 
	 	<label>Search by Price:</label>
	 	 <div className="form-inline">
	 	 <input 
	 	 className ="homevalue" 
	 	 align="right" 
	 	 type ="text" name="lowval" size ="2"
	 	 onChange = {handleChange}
	 	 placeholder = "Low"
	 	 />
	 	 <label>To</label>
	 	 <input 
	 	 className="homevalue" 
	 	 align="right" 
	 	 type ="text" name="highval" size ="2"
	 	 onChange = {(handleChange)}
	 	 placeholder ="High"
	 	 />
	 	 </div>
	 	</form>
	 	</div>
	 	</div>
	 	</div>


	 </div>
	 
	)

}

export default Navbar;