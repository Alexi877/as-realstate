import React, {Component} from 'react';
import Homecard from './Homecard';

class Favorites extends Component{

    render() {
        let filteredhomes = this.props.homes.filter(homes=> {
            return this.props.favorites.includes(homes.id);
        });
        console.log("filtered" , filteredhomes);
        console.log("home type" , filteredhomes);
        return(
           <div className="current-favorites">
            {
            filteredhomes.map( homes => {
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
                );
            })
            }
           </div> 
        )
    }
}

export default Favorites;