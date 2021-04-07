import React from "react";
import SurveyQuestion from "./SurveyQuestion";
import { Button, Form } from "semantic-ui-react";

const SurveyQuestionForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit} data-testid="survey-form">
      {props.surveyData.map((item, index) => (
        <SurveyQuestion
          key={index}
          item={item}
          updateState={props.updateState}
          formState={props.formState}
        />
      ))}
      <Button
        type="submit"
        floated="right"
        style={{
          color: "white",
          marginBottom: "20px",
          backgroundColor: "#0074cc",
        }}
        data-testid="submit-survey-button"
      >
        Continue
      </Button>
    </Form>
  );
};
export default SurveyQuestionForm;
