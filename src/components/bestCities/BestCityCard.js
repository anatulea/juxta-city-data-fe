import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const BestCityCard = (props) => {
  const livability = Math.round(props.cities.LivabilityScore);
  return (
    <Card
      fluid
      style={{
        height: "300px",
        boxShadow: "0 1.5rem 4rem rgba(0, 0, 0, 0.3)",
        transition: "all 0.4s ease",
      }}
      data-testid="city-card"
      onClick={() => props.handleClick(props.cities.city)}
    >
      <Image src={props.cities.photo_url} alt="" style={{ height: "200px" }} />
      <Card.Content>
        <Card.Header as="h3">{props.cities.city}</Card.Header>
        <Card.Description as="h4">
          <Icon name="line graph" color="blue" />
          {livability} Livability
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default BestCityCard;
