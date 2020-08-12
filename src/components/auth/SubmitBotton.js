import React from "react";
import { Button, Icon } from "semantic-ui-react";
const SubmitButton = ({ title }) => {
  return (
    <Button
      style={{ backgroundColor: "#191969", color: "white", margin: "0 60px" }}
    >
      {title}
      <Icon name="long arrow alternate right" />
    </Button>
  );
};
export default SubmitButton;
