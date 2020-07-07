import React, { useContext, useState, useEffect } from "react";
import ProfileContext from "../../../../contexts/ProfileContext";
import { getSurveyData } from "../../../surveyQuestions/SurveyFunctions";
import SurveyAnswers from './SurveyAnswers'
import Paper from "@material-ui/core/Paper";
import profileInfoStyle from "../../profileStyles/profileInfoStyle";

const SurveyAnswersBox = ({index}) => {
  const classes = profileInfoStyle();
  const { profileData } = useContext(ProfileContext);
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    getSurveyData().then((response) => setSurveyData(response));
  }, []);
 
  
   return (
    <Paper className={classes.paper}>
      <h3>Your Survey Answers</h3>
     <SurveyAnswers  index={index} profileData={profileData}  surveyData={surveyData} />
     
    </Paper>
   )
  
};
export default SurveyAnswersBox;
