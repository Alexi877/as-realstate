import React from 'react';


const Homecard = ({price,beds,baths,address,img, adress, sqft, id}) => {
	return(
	<div className="homecard container mx-auto">
	 <div className = "row">
	  <div className ="card-container">	   
	<img src= {img}
	alt="homes" 
	height="212" 
	width="311.5"
	/>
	<h2>${price}</h2>
	 <div className="houseinfo d-inline-flex"> 
	<p>{beds} Beds</p>
	<p>{baths} Baths</p>
	<p>{sqft} Sq. Ft.</p>
	 </div>
	<p>{address}</p>	  
	  </div>
	 </div>
	</div>
	);
}

export default Homecard;