import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CityContext from '../../contexts/CityContext.js';
import {  Input, Button } from 'semantic-ui-react';
import { getCityData, getCityArray } from '../../functions';


const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [cities, setCities] = useState([]);
  const { setCityData } = useContext(CityContext);
  let history = useHistory();
  useEffect(() => {
    if (search.length < 3 || undefined) {
      setCities([]);
    } else {
      getCityArray(search).then((res) => setCities(res));
    }
  }, [search]);
  const handleSubmit = (e) => {
    console.log('Clicked search')   
    e.preventDefault();
    getCityData(search).then((res) => {
      setCityData(res);
      localStorage.setItem('cityName', res.city);
      history.push('/cityview');
    });
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleCityClick = (city) => {
    setSearch(city);
  };
  return (
    <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}> 
      <div role='search' style={{display:'flex', flexDirection:'row'}}>
        <Input
        style={{width:'25vw'}}
          fluid
          type='search'
          name='city'
          value={search}
          placeholder='Search for a city'
          onChange={handleChange}
          aria-label='Search for a city'
          results='5'
          
        />
        <Button type='submit' id='search-btn'>
            Search
        </Button>
        </div>
        <div className='city-search-dropdown'>
        {cities.length === 0 &&
          search !== '' &&
          search.split('').length > 2 ? (
            <p>No Matches Found...</p>
          ) : (
            cities.splice(0, 4).map((city, idx) => (
              <p key={idx} onClick={() => handleCityClick(city)}>
                {city}
              </p>
            ))
          )}
        </div>
    </form>
  );
};

export default SearchBar;
