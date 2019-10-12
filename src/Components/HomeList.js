import React from 'react';
import Homecard from './Homecard';

const HomeList =({Homes})=>{  /* Here we pass Homes that fall between a low and high price */

 return (
	<div className="py-3">
	 <div className="row">  
	{
	 Homes.map((homes, i)=>{
	  return(
	  	<Homecard
	  	key = {Homes[i].id}
	  	name = {Homes[i].name}
	  	price = {Homes[i].price}
	  	img = {Homes[i].img}
	  	beds = {Homes[i].beds}
	  	baths = {Homes[i].baths}
	  	address = {Homes[i].address}
	  	sqft = {Homes[i].sqft}
	  	/>
	  	)
	 })
	}
	 </div>
	</div>
 )

}
export default HomeList;