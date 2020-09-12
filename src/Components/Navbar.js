import React from 'react';
import {Link} from 'react-router-dom';

const Navbar =({handleFilter, handleSort, sortby, showFilter}) => {
	


	return(
	<div className = "Navbar container-fluid">
	 <div className="row">
	 <div className = "col-2">
	 	<div className="Navbarform">
	 <div className="homebutton d-inline-flex">
	   <Link to="/"><button className="home-button" title="home"><i className="fa fa-home fa-2x"></i></button>
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
		<div className='filters-button'>
		<button title="filters" onClick={() => handleFilter()}><i className="fa fa-filter"></i></button>
		</div>
		 </div>
		): ('')}
	 	 <div className="signin-button d-inline-flex">
	   <Link to="/signin"><button className="sign-in" title="sign-in"><i className="fa fa-sign-in fa-2x"></i></button>
	   </Link>
	 </div>
	 	</div>
	 	</div>
	 	</div>

	 </div>
	 
	)

}

export default Navbar;