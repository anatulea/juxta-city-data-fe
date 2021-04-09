import React, { useState, useEffect } from "react";
import CityMapWrapper from "./CityMapWrapper";
import axios from "axios";

function CityMap(props) {
  const [coords, setCoords] = useState({});

  let city = localStorage.getItem("cityName");
  // let city = props.cityData.city;

  useEffect(() => {
    getCoord(city);
  }, [city]);

  const getCoord = async (address) => {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_API_KEY}`)
    
    setCoords(response.data.results[0].geometry.location);
  };
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "500px",
  };

  if (Object.keys(coords).length === 0) {
    return <span></span>;
  } else {
    return (
      <div style={containerStyle} id='box-container'>
        <CityMapWrapper coords={coords} />
      </div>
    );
  }
}

export default CityMap;
