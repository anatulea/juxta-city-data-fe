import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import FavoriteCityCard from "./FavoriteCityCard";
import { Divider, Header } from "semantic-ui-react";

export default function Favoirtes() {
  const [cities, setCities] = useState([]);
  const { userData } = useContext(UserContext);

  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/");
    }

    if (userData.favorites) {
      setCities(userData.favorites);
    }
  }, [userData, setCities, history]);

  return cities.length === 0 ? (
    <></>
  ) : (
    <div style={{ margin: "3% 7%" }}>
      <Divider horizontal>
        <Header as="h2">Favorite Cities</Header>
      </Divider>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gridGap: "1rem",
        }}
      >
        {cities.map((city) => (
          <FavoriteCityCard key={city.id} cityData={city} />
        ))}
      </div>
    </div>
  );
}
