import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import {
  addFavorite,
  removeFavorite,
  createUserContext,
} from "../../functions";
import { Icon } from 'semantic-ui-react'

export default function FavoriteIcon(props) {
  const [favorited, setFavorited] = useState(false);
  const { setUserData, userData } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {createUserContext().then((res) => setUserData(res))}
  }, [setUserData]);

  useEffect(() => {
    if (userData.favorites) {
      userData.favorites.some((city) => city.id === parseInt(props.cityData.id)) ? setFavorited(true) : setFavorited(false)}
  }, [userData.favorites, props.cityData.id]);

  const handleClick = (e) => {
    e.preventDefault();
    if (favorited && userData.id) {
      removeFavorite(userData.id, props.cityData.id);
      setFavorited(false);
    } else if (!favorited && userData.id) {
      addFavorite(userData.id, props.cityData.id);
      setFavorited(true);
    } else {
      props.history.push("/signin")}
  };
  
  return (
    <div onClick={handleClick} alt="star icon" data-testid ='star-btn'>
     {favorited? (<Icon name='star'  size ='large' color ='yellow' data-testid="stared" /> ): (<Icon  size ='large' name='star outline' data-testid="unstared" />)}   
     {/* {favorited? (<Icon name='heart' color ='red' /> ): (<Icon name='heart outline' />)} // with heart icon */}
   </div>
  );
};
