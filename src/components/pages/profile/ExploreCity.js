import React from 'react';
import SearchBar from '../../subComponents/SearchBar';
import { Card } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import ModalSurvey from '../../surveyQuestions/ModalSurvey';

export default function ExploreCity() {
  
  const history = useHistory();
  return (
    <Card id="explore-city" fluid style={{ textAlign: 'center'}}>
      <Card.Content >
        <Card.Header  style={{ color: "white", margin: "5% 0", fontSize:'2.5rem'}}>Search for a city</Card.Header>
       <div style={{display:'flex', flexDirection:'row',justifyContent:'center'}}>
       <SearchBar /> 
       </div>
        <br></br>
        <Card.Header  style={{  marginTop:'5%', color: "white", fontSize:'2rem'}}>
          Or take our Survey to get recommendations!
        </Card.Header>
        <ModalSurvey  history={history}/>
      </Card.Content>
    </Card>
  );
}