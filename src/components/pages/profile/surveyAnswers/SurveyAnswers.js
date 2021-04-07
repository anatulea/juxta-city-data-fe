import React from 'react';
import AnswerSurvey from './AnswerSurvey';
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';
import ModalSurvey from '../../../surveyQuestions/ModalSurvey';

const SurveyAnswers = ({ surveyData, profileData}) => {
  const history = useHistory();
  return (
    profileData && profileData.map((info,index) => {
      if (info.surveyinfo !== null) {
        return (
          <Card key={index} fluid>
            <Card.Content>
              <Card.Header>Your Survey Answers</Card.Header>
            </Card.Content>
            <Card.Content>
              <AnswerSurvey info={info} surveyData={surveyData} />
              <ModalSurvey history={history}/>
            </Card.Content>
          </Card>
        );
      } else {
        return <span></span>;
      }
    })
  );
};
export default SurveyAnswers;
