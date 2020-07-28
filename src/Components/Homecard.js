import React from 'react';
import {Link} from 'react-router-dom';


const Homecard = ({price,beds,baths,address,img, sqft, id}) => {
	return(
	<div className="homecard container mx-auto">
	 <Link className='link' to={`/details/${id}`}>
	 <div className = "row">
	  <div className ="card-container">	   
	<img src= {img}
	alt="homes" 
	height="212" 
	width="311.5"
	/>
	<h2 className="price">${price}</h2>
	 <div className="houseinfo d-inline-flex"> 
	<p>{beds} Beds</p>
	<p>{baths} Baths</p>
	<p>{sqft} Sq. Ft.</p>
	 </div>
	<p>{address}</p>	  
	  </div>
	 </div>
	 </Link>
	</div>
	);
}

export default Homecard;