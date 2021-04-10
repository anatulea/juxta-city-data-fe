import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import FavoriteCityCard from "./FavoriteCityCard";
import { Grid, Divider, Header, Icon } from "semantic-ui-react";

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
    <>
      <Divider horizontal>
        <Header as="h2">Favorite Cities</Header>
      </Divider>
      <Grid stackable columns={3}>
        <Grid.Row style={{ justifyContent: "center" }}>
          {cities.map((city) => (
            <Grid.Column mobile={14} tablet={9} computer={5}>
              <FavoriteCityCard key={city.id} cityData={city} />
              <br />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </>
  );
}
