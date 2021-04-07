import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/newlogo.png";
import ModalSurvey from "../surveyQuestions/ModalSurvey";
import { Header, Image, Segment } from "semantic-ui-react";

const SurveyCard = {
  margin: "0 auto",
  width: "65rem",
  padding: "3rem",
  "border-radius": "5px",
  display: "flex",
  "flex-direction": "column",
  "align-items": "center",
  "justify-content": "center",
  "text-align": "center",
  "box-shadow": " 0 2rem 4rem rgba(0, 0, 0, 0.3)",
};

const SurveyBox = () => {
  const history = useHistory();

  return (
    <Segment content textAlign="center" style={SurveyCard}>
      <Header image>
        <Image src={Logo} style={{ width: "20rem" }} centered alt="citylogo" />
        <h2>Introducing City Match Maker!</h2>
        <p>
          Get recommendations by answering a few questions and find a new place
          to call home!
        </p>
      </Header>
      <ModalSurvey history={history} />
    </Segment>
  );
};

export default SurveyBox;
