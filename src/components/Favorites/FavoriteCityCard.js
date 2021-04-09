import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FavoriteIcon from '../subComponents/FavoriteIcon';
import { getCityData } from '../../functions';
import CityContext from '../../contexts/CityContext';
import { Card, Image } from 'semantic-ui-react';


export default function FavoiriteCityCard(props) {
  const history = useHistory();

  const { setCityData } = useContext(CityContext);

  const handleClick = e => {
    getCityData(props.cityData.city).then(res => {
      setCityData(res);
      localStorage.setItem('cityName', props.cityData.city);
      history.push('/cityview');
    });
  };
  return (
    <Card  id="favorite-card">
      <Card.Content style={{display: 'flex',flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'baseline', }} >
        <FavoriteIcon {...props} cityData={props.cityData} />
        <Card.Header as='h4' onClick={handleClick}>
          {props.cityData.city}
        </Card.Header>
      </Card.Content>
      <Card.Content onClick={handleClick} textAlign='center'>
        <Image src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.cityData.city}&zoom=6&size=200x200&scale=1&markers=size:mid%7Ccolor:0xFF8054%7Clabel:O%7C${props.cityData.city}&key=${process.env.REACT_APP_API_KEY}`} />      
        </Card.Content>
    </Card>
  );
}
