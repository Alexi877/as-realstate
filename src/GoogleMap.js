import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';


const mapStyles = {
		width: '100%',
		height: '450px'
	}
class GoogleMap extends Component {
	render() {
	return (
	<div className = "container-fluid">
	 <div className ="row">
		<div className = "text-center">
		<h1> Google Maps </h1>
			<Map
          google={this.props.google}
          zoom={13}
          style={mapStyles}
          initialCenter={{ lat: 38.9559, lng: -76.9417}}
        >
          <Marker position={{ lat: 38.9559, lng: -76.9417}} />
       	 </Map>

		 </div>
	 </div>
	</div>
	);
	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDVCQ0ggmeQEZSowlPlb7IcvXN13Abb3Do'
}) (GoogleMap);
