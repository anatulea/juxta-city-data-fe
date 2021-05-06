import React from "react";
import NavBar from "./Navbar.js";
import TopHeader from "./pages/TopHeader.js";
import RecommendedComponent from "./recommended/RecommendedComponent";
import BestCities from "./bestCities/BestCities";
import Favorites from "./Favorites/Favorites.js";

function Dashboard(props) {
  return (   
    <div>
        <NavBar {...props}/>
        <TopHeader />
        <RecommendedComponent {...props} />
        <Favorites {...props}/>
        <BestCities/>
    </div>
    
  );
}

export default Dashboard;
