import React from "react";
import SurveyQuestionForm from "./SurveyQuestionForm";
import { Container, Header, Divider } from "semantic-ui-react";

const SurveyQuestionsBox = (props) => {
  return (
    <Container>
      <Header as="h1">
        Answer a few questions to get city recommendations
      </Header>
      <Divider section></Divider>
      <SurveyQuestionForm
        handleSubmit={
          !props.profileData.length
            ? props.handleNoAuthSubmit
            : props.handleSurveySubmit
        }
        surveyData={props.surveyData}
        updateState={props.updateState}
        formState={props.formState}
      />
    </Container>
  );
};

export default SurveyQuestionsBox;
