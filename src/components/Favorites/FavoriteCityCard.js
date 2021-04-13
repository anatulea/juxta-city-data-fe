import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import FavoriteIcon from "../subComponents/FavoriteIcon";
import { getCityData } from "../../functions";
import CityContext from "../../contexts/CityContext";
import { Image } from "semantic-ui-react";

export default function FavoiriteCityCard(props) {
  const history = useHistory();

  const { setCityData } = useContext(CityContext);

  const handleClick = (e) => {
    getCityData(props.cityData.city).then((res) => {
      setCityData(res);
      localStorage.setItem("cityName", props.cityData.city);
      history.push("/cityview");
    });
  };
  return (
    <div id="favorite-card">
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <FavoriteIcon {...props} cityData={props.cityData} />
        <h4 onClick={handleClick}>{props.cityData.city}</h4>
        <br />
      </div>
      <hr color="#e0e0e0" />
      <div
        onClick={handleClick}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Image
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.cityData.city}&zoom=6&size=200x200&scale=1&markers=size:mid%7Ccolor:0xFF8054%7Clabel:O%7C${props.cityData.city}&key=${process.env.REACT_APP_API_KEY}`}
        />
      </div>
    </div>
  );
}
