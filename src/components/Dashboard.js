import React, { useEffect, useContext } from "react";
import NavBar from "./Navbar.js";
import TopHeader from "./pages/TopHeader.js";
import RecommendedComponent from "./recommended/RecommendedComponent";
import BestCities from "./bestCities/BestCities";
import Favorites from "./Favorites/Favorites.js";
import { createUserContext } from "../functions";
import UserContext from "../contexts/UserContext";

function Dashboard(props) {
  const { setUserData } = useContext(UserContext);
  useEffect(() => {
    createUserContext().then((res) => setUserData(res));
  }, [ setUserData]);

  return (   
    <div>
        <NavBar {...props}/>
        <TopHeader />
        <RecommendedComponent {...props} />
        <Favorites {...props}/>
        <BestCities {...props}/>
    </div>
    
  );
}

export default Dashboard;
