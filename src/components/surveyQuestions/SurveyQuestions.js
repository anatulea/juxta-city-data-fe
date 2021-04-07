import React, { useState, useContext, useEffect } from "react";
import RecommendedContext from "../../contexts/RecommendedContext";
import ProfileContext from "../../contexts/ProfileContext";
import { useHistory } from "react-router-dom";
import { getRecommendedCities } from "../../functions/index";
import { getSurveyData, putSurveyAnswers } from "./SurveyFunctions";
import SurveyQuestionsBox from "./SurveyQuestionsBox";

const initialState = {
  state: "None",
  population: "0",
  population_change: "0",
  median_age: "0",
  house_cost: "0",
  rental_cost: "0",
  population_density: "0",
  cost_of_living: "0",
  average_commute: "0",
  air_quality: "0",
};

const SurveyQuestions = (props) => {
  const [surveyData, setSurveyData] = useState([]);
  const [formState, setFormState] = useState(initialState);

  const { setRecommendedCity } = useContext(RecommendedContext);
  const { profileData } = useContext(ProfileContext);

  const history = useHistory();

  function updateState(name, val) {
    setFormState({ ...formState, [name]: val });
  }

  function getRecommended() {
    getRecommendedCities(formState)
      .then((cities) => setRecommendedCity(cities))
      .then(() => {
        props.setOpenSurvey(false);
        props.history.push("/recommended");
      })
      .catch((err) => console.log(err));
  }

  function handleNoAuthSubmit(event) {
    event.preventDefault();
    getRecommended();
  }

  function handleSurveySubmit(event) {
    const profileId = profileData[0].id;
    event.preventDefault();
    putSurveyAnswers(formState, profileId);
    getRecommended();
  }

  useEffect(() => {
    getSurveyData().then((response) => setSurveyData(response));
  }, []);

  return (
    <SurveyQuestionsBox
      props={props}
      profileData={profileData}
      handleNoAuthSubmit={handleNoAuthSubmit}
      handleSurveySubmit={handleSurveySubmit}
      surveyData={surveyData}
      updateState={updateState}
      formState={formState}
    />
  );
};

export default SurveyQuestions;
