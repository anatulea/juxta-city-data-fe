import React, { useContext, useEffect, useState } from "react";
import RecommendedCard from "./RecommendedCard";
import RecommendedContext from "../../contexts/RecommendedContext";
import cityscape from "../../assets/cityscape.png";
import { Header, Divider } from "semantic-ui-react";

export default function RecommendedComponent(props) {
  const [cities, setCities] = useState(null);
  const { recommendedCity } = useContext(RecommendedContext);

  useEffect(() => {
    if (recommendedCity.length > 0) {
      setCities(recommendedCity);
    }
  }, [recommendedCity]);
  return !cities ? (
    <></>
  ) : (
    <div style={{ margin: "3% 7%" }}>
      <Divider horizontal>
        <Header as="h2">Your Recommended Cities </Header>
      </Divider>
      <div id="city-grid">
        {cities.map((city) => (
          <RecommendedCard key={city.id} {...props} cityData={city} />
        ))}
        <img src={cityscape} alt="cityscape" className="comp-cityscape" />
      </div>
    </div>
  );
}
