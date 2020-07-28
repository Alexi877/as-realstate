import React from 'react';
import {Link} from 'react-router-dom';

const Navbar =({handleFilter, handleSort, sortby, showFilter}) => {
	


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
	 	<div className="col-10 navbar-column">
	 	<div className="text-right">
		{ showFilter=='show'? (
		 <div className='filters'>
	 	<select className ="selectsort"  value={sortby} onChange={handleSort}>
	 	<option className="sortoption" defaultValue disabled={true} value="">Sort</option>
	 	<option value="clear">Clear</option>
	 	<option value="price">Price</option>
	 	<option value="beds">Beds</option>
	 	<option value="sqft">Sq Ft</option>
	 	</select>
	 	<input 
	 	 className ="filtervalue" 
	 	 align="left" 
	 	 type ="button" name="addedfilter" value="+filters" size ="2"
	 	 onClick={() => handleFilter()}
	 	 />
		 </div>
		): ('')}
	 	 <div className="signin-button d-inline-flex">
	   <Link to="/signin"><button className="btn btn-primary">Sign in</button>
	   </Link>
	 </div>
	 	</div>
	 	</div>
	 	</div>

	 </div>
	 
	)

}

export default Navbar;