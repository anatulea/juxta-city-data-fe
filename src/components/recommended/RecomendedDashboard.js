import React, { useEffect, useState, useContext } from "react";
import NavBar from "../Navbar";
import RecommendedCard from "./RecommendedCard";
import cityscape from "../../assets/cityscape.png";
import RecommendedContext from "../../contexts/RecommendedContext";
import UserContext from "../../contexts/UserContext";
import { Header, Button, Divider } from "semantic-ui-react";

export default function RecommendedDashboard({ auth, history, location }) {
  const { recommendedCity } = useContext(RecommendedContext);
  const { userData } = useContext(UserContext);

  const user = Object.entries(userData).length;

  const [cities, setCities] = useState([]);
  useEffect(() => {
    setCities(recommendedCity);
    console.log(recommendedCity);
    if (recommendedCity.length === 0) {
      history.push("/dashboard");
    }
  }, [recommendedCity, history]);

  const props = { auth, history, location };

  return (
    <div>
      <NavBar {...props} />
      <Divider horizontal style={{ margin: "3% 7%" }}>
        <Header as="h2">Your Recommended Cities </Header>
      </Divider>
      <div id="city-grid">
        {cities ? (
          cities.map((city) => (
            <RecommendedCard key={city.id} {...props} cityData={city} />
          ))
        ) : (
          <></>
        )}

        <img src={cityscape} alt="cityscape" className="dash-cityscape" />
      </div>
      <Button
        style={{
          color: "white",
          marginLeft: "85%",
          backgroundColor: "#0074cc",
          marginBottom: "50px",
        }}
        onClick={() => {
          user > 0 ? history.push("/dashboard") : history.push("/");
        }}
      >
        Go To Dashboard
      </Button>
    </div>
  );
}
