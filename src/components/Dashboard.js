import React, {useEffect, useContext} from 'react';
import NavBar from './Navbar.js';
import Header from './pages/Header.js';
import BestCities from './bestCities/BestCities';
import Favorites from './Favorites/Favorites.js';
import { withAuth } from '@okta/okta-react';
import {createUserContext} from '../functions';
import UserContext from '../contexts/UserContext';

function Dashboard(props) {
  const {setUserData} = useContext(UserContext)
  useEffect(()=> {
    createUserContext().then(res => setUserData(res))
  },[])
  return (
    <>
      <NavBar {...props} />
      <Header />
      <Favorites/>
      <BestCities />
    </>
  );
}

export default withAuth(Dashboard);
