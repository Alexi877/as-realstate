import React from 'react';
import Homecard from './Homecard';

const HomeList =({Homes})=>{  /* Here we pass Homes that fall between a low and high price */

 return (
	<div className="py-3">
	 <div className="row">  
	{
	 Homes.map((homes)=>{
	  return(
	  	<Homecard
	  	key = {homes.id}
	  	name = {homes.name}
	  	price = {homes.price}
	  	img = {homes.img}
	  	beds = {homes.beds}
	  	baths = {homes.baths}
	  	address = {homes.address}
		  sqft = {homes.sqft}
		  id={homes.id}
	  	/>
	  	)
	 })
	}
	 </div>
	</div>
 )

}
export default HomeList;