import React from "react";
import { Input, Form, Segment } from "semantic-ui-react";

const SurveyOptions = (props) => {
  
  function handleUpdateState(event) {
    props.updateState(event.target.name, event.target.value);
  }

  return (
    <Segment data-testid="option-label">
      <Form>
        <Input
          data-testid="radio-input-option"
          type="radio"
          name={props.name}
          value={props.value}
          checked={props.formState[`${props.name}`] === props.value}
          onChange={handleUpdateState}
        />
        {props.description}
      </Form>
    </Segment>
  );
};

export default SurveyOptions;
