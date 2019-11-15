import React from 'react';

const DropDown =({handleBed, handleBath, handleSqft, handleLocation, handleFilter, handleChange})=>{
	return(
		<div className="dropdown text-center">
		<div>
		<form className="navigation form-horizontal d-inline-flex">

 
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
		<form>
		<div className="filterblock">
		<label>Beds:</label>
		<input 
	 	 className ="extrafilters" 
	 	 align="right" 
	 	 type ="text" name="beds" size ="1"
	 	 placeholder = "Beds"
	 	 onChange={handleBed}
	 	 />
	 	 </div>
	 	 <div className="filterblock">
	 	 <label>Baths:</label>
	 	 <input 
	 	 className ="extrafilters" 
	 	 align="right" 
	 	 type ="text" name="baths" size ="1"
	 	 placeholder = "Baths"
	 	 onChange={handleBath}
	 	 />
	 	 </div>
	 	 <div className="filterblock">
	 	 <label>Sq ft:</label>
	 	 <input 
	 	 className ="extrafilters" 
	 	 align="right" 
	 	 type ="text" name="Squarefeet" size ="1"
	 	 placeholder = "Sq Ft"
	 	 onChange={handleSqft}
	 	 />
	 	 </div>
	 	 <div className="filterblock">
	 	 <label>location:</label>
	 	 <input 
	 	 className ="extrafilters" 
	 	 align="right" 
	 	 type ="text" name="location" size ="4"
	 	 placeholder = "location"
	 	 onChange={handleLocation}
	 	 />
	 	 </div>
	 	 <div className="filterblock">
	 	 <input 
	 	 className ="closefilters" 
	 	 align="right" 
	 	 type ="button" name="addedfilter" value="close" size ="4"
	 	 placeholder = "location"
	 	 onClick={() => handleFilter('close')}
	 	 />
	 	 </div>
		</form>

		</div>
		</div>
		)
}
export default DropDown;