import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

function CityMapWrapper (props) {
    
    return (
        <Map
          google={props.google}
          zoom={10}
          style={{width: '100%', height: '500px'}}
          initialCenter={props.coords}
        >
            <Marker position={props.coords} />
        </Map>
    )
  
}
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY
  })(CityMapWrapper);