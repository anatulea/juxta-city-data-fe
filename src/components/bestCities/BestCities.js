import React, { useState, useEffect } from "react";
import CitiesList from "./CitiesList";
import { getBestCities } from "../../functions/index";
import { Container, Header } from "semantic-ui-react";

const BestCities = () => {
  const [gridList, setGridList] = useState([]);

  useEffect(() => {
    getBestCities().then((cities) => setGridList(cities));
  }, []);

  return (
    <Container fluid>
      <Header as="h1" style={{ marginLeft: "8%", fontSize: "3rem" }}>
        Explore cities
        <Header.Subheader as="h1" style={{ fontSize: "1.5rem" }}>
          Check out our collection of cities with the highest livability score
          in the country. The score is based on factors like the cost of living,
          home affordability, schools, crime rate, job opportunity, average
          income and others. Scores closer to 100 represent better living
          conditions.
        </Header.Subheader>
      </Header>
      <CitiesList gridList={gridList} />
    </Container>
  );
};

export default BestCities;
