import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';


const mapStyles = {
		width: '25%',
		height: '50%'
	}
class GoogleMap extends Component {
	render() {
	return (
	<div className = "container-fluid">
	 <div className ="row">
		<div className = "col-xs-4">
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
