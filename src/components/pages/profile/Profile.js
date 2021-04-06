import React, { useEffect, useState, useContext } from "react";
import NavBar from "../../Navbar.js";
import ProfileInfo from "./ProfileInfo";
import AddProfile from "./AddProfile.js";
import EditUser from "./EditUser";
import ProfileContext from "../../../contexts/ProfileContext";
import { createProfileContext } from "../../../functions";
import RecommendedComponent from "../../recomended/RecommendedComponent";
import Favorites from "../../Favorites/Favorites.js";
import { createUserContext } from "../../../functions";
import UserContext from "../../../contexts/UserContext";
import { Grid } from "semantic-ui-react";
import ExploreCity from "./ExploreCity";
import AddProfileBox from "./AddProfileBox.js";

export default function Profile(props) {
  const [editing, setEditing] = useState(false);
  const { profileData, setProfileData } = useContext(ProfileContext);

  useEffect(() => {
    createProfileContext().then((res) => setProfileData(res));
  }, [setEditing]);

  // this is for favorites
  const { setUserData } = useContext(UserContext);
  useEffect(() => {
    createUserContext().then((res) => setUserData(res));
  }, [setUserData]);

  const toggleEditing = () => {
    setEditing(true);
  };

  return (
    <>
      <NavBar {...props} />
      <Grid style={{ margin: "0 10%" }} stackable columns={2} >
        <Grid.Row style={{ justifyContent: "center" }}>
          {profileData.length === undefined ? null : (
            <Grid.Column textAlign="center"  mobile={12} tablet={8} computer={4}>
              <ProfileInfo  toggleEditing={toggleEditing} />
            </Grid.Column>
          )}
          <Grid.Column  textAlign="center" mobile={12} tablet={8} computer={12}>
            <AddProfileBox profileData={profileData} />
            <Favorites {...props} />
            <RecommendedComponent {...props} />
            <ExploreCity />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
