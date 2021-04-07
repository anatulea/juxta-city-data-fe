import React from "react";
import { Heading } from "./styles/surveyQuestionsStyles";
import SurveyQuestionForm from "./SurveyQuestionForm";

const SurveyQuestionsBox = ({
  props,
  profileData,
  updateState,
  formState,
  handleNoAuthSubmit,
  surveyData,
  handleSurveySubmit,
}) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Heading>Answer a few questions to get a city recomendation</Heading>
        <SurveyQuestionForm
          handleSubmit={
            !profileData.length ? handleNoAuthSubmit : handleSurveySubmit
          }
          surveyData={surveyData}
          updateState={updateState}
          formState={formState}
        />
      </div>
    </div>
  );
};

export default SurveyQuestionsBox;
