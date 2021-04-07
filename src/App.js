import React, { useState } from "react";
import "./index.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import CityContext from "./contexts/CityContext.js";
import RecommendedContext from "./contexts/RecommendedContext";
import ProfileContext from "./contexts/ProfileContext.js";
import ModalContext from "./contexts/ModalContext.js";
import LandingPage from './components/LandingPage.js';
import Dashboard from './components/Dashboard.js';
import Authentication from './components/auth/Authentication.js';
import Profile from './components/pages/profile/Profile.js';
import SingleCityView from './components/SingleCityView.js';
import SurveyQuestions from './components/surveyQuestions/SurveyQuestions.js';
import RecommendedDashboard from './components/recommended/RecomendedDashboard';
import Footer from "./components/Footer";

const App = () => {
  const [userData, setUserData] = useState({});
  const [cityData, setCityData] = useState({});
  const [recommendedCity, setRecommendedCity] = useState([]);
  const [profileData, setProfileData] = useState({});
  const [modal, setModal]= useState(false)

  return (
    <Router>
      <div className="App"  id="page-container">
        <ModalContext.Provider value={{modal, setModal}}>
        <CityContext.Provider value={{ cityData, setCityData }}>
          <UserContext.Provider value={{ userData, setUserData }}>
            <RecommendedContext.Provider
              value={{ recommendedCity, setRecommendedCity }}>
              <ProfileContext.Provider value={{ profileData, setProfileData }}>
                <div>
                  <Route path='/' exact component={LandingPage} />
                  <Route path='/dashboard' exact component={Dashboard} />
                  <Route path='/cityview' exact component={SingleCityView} />
                  <Route path='/survey' exact component={SurveyQuestions} />
                  <Route path='/signin' exact component={Authentication} />
                  <Route path='/recommended' exact component={RecommendedDashboard} />
                  <Route path='/profile' exact component={Profile} />
                  <Footer/>
                </div>
              </ProfileContext.Provider>
            </RecommendedContext.Provider>
          </UserContext.Provider>
        </CityContext.Provider>
        </ModalContext.Provider>
      </div>
    </Router>
  );
};

export default App;
