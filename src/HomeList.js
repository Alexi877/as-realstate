import React from 'react';
import {Homesforsale} from './data.js';
import Homecard from './Homecard';

const HomeList =()=>{

 return (
	<div className="py-3">
	 <div className="row mx-auto">
	  
	{
	 Homesforsale.map((homes, i)=>{
	  return(
	  	<Homecard
	  	key = {Homesforsale[i].id}
	  	name = {Homesforsale[i].name}
	  	price = {Homesforsale[i].price}
	  	img = {Homesforsale[i].img}
	  	beds = {Homesforsale[i].beds}
	  	baths = {Homesforsale[i].baths}
	  	address = {Homesforsale[i].address}
	  	sqft = {Homesforsale[i].sqft}
	  	/>
	  	)
	 })
	}
	  
	 </div>
	</div>
 )

}
export default HomeList;