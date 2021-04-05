import React, { useContext } from "react";
import ProfileContext from "../../../contexts/ProfileContext";
import InfoList from "./InfoList";
import SurveyAnswersBox from "./surveyAnswers/surveyAnswersBox";

const ProfileInfo = ({ toggleEditing }) => {
  const { profileData } = useContext(ProfileContext);

  return profileData.map((info, index) => (
    <div key={index}>
      <InfoList info={info} toggleEditing={toggleEditing} />
      <SurveyAnswersBox index={index} />
    </div>
  ));
};

export default ProfileInfo;
