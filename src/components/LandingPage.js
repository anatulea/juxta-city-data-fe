import React from 'react';
import TopHeader from './pages/TopHeader.js';
import BestCities from './bestCities/BestCities';
import NavBar from './Navbar';
import SurveyBox from './subComponents/SurveyBox.js';

const LandingPage = (props) => {
  return (
    <div>
      <NavBar {...props} />
      <TopHeader />
      <BestCities {...props} />
      <SurveyBox />
    </div>
  );
};

export default LandingPage;
