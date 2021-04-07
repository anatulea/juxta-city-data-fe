import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/logo.png";
import ModalSurvey from "../surveyQuestions/ModalSurvey";
import { Header, Image, Segment } from "semantic-ui-react";

const SurveyBox = () => {
  const history = useHistory();

  return (
    <Segment
      textAlign="center"
      style={{ margin: "0 auto", width: "85%", height: "550px" }}
      id="survey-box"
    >
      <Header image>
        <Image
          src={Logo}
          style={{ width: "20rem", marginBottom: "15%" }}
          centered
          alt="citylogo"
        />
        <Header as="h1" style={{ color: "white" }}>
          We Can Help You Find the Perfect City for You!
        </Header>
        <Header as="h3" style={{ color: "white" }}>
          Get the most accurate recommendations by answering a few survey
          questions and find a new place to call home!
        </Header>
      </Header>
      <ModalSurvey history={history} />
    </Segment>
  );
};

export default SurveyBox;
