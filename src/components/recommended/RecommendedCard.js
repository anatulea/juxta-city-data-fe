import React, { useContext } from "react";
import FavoriteIcon from "../subComponents/FavoriteIcon";
import CityContext from "../../contexts/CityContext";
import { getCityData } from "../../functions";
import { Button } from "semantic-ui-react";

export default function RecommendedCard(props) {
  const { setCityData } = useContext(CityContext);

  const handleClick = (e) => {
    e.preventDefault();
    getCityData(props.cityData.name_and_state).then((res) => {
      setCityData(res);
      localStorage.setItem("cityName", res.city);
      props.history.push("/cityview");
    });
  };
  const livabilityScore = Math.floor(props.cityData.livability_score * 10) / 10;

  return (
    <div id="recommended-card">
      <div
        className="recommended-header"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <FavoriteIcon cityData={props.cityData} {...props} />
        <h4>{props.cityData.name_and_state}</h4>
        <p className="livability-score">{livabilityScore}</p>
      </div>
      <hr color="#e0e0e0" />
      <p>{props.cityData.population_desc}</p>
      <Button basic onClick={handleClick}>
        Learn More
      </Button>
    </div>
  );
}
