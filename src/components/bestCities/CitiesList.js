import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CityContext from "../../contexts/CityContext";
import { getCityData, randomCity } from "../../functions";
import BestCityCard from "./BestCityCard";
import { Grid } from "semantic-ui-react";

const CitiesList = (props) => {
  const { setCityData } = useContext(CityContext);
  const history = useHistory();

  const randomCities = randomCity(props.gridList).splice(0, 4);

  function handleClick(city) {
    getCityData(city).then((city) => {
      setCityData(city);
      localStorage.setItem("cityName", city.city);
      history.push("/cityview");
    });
  }

  return (
    <Grid
      stackable
      columns={4}
      style={{ margin: "0 10%" }}
      data-testid="grid-title"
    >
      <Grid.Row style={{ justifyContent: "center" }}>
        {randomCities.map((title, index) => (
          <Grid.Column  key={index} mobile={12} tablet={8} computer={4}>
            <BestCityCard
              key={index}
              cities={title}
              handleClick={handleClick}
            />
            <br />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default CitiesList;
