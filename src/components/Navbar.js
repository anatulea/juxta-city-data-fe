import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../assets/logo.png";
import profiledefault from "../assets/userProfile.png";
import UserContext from "../contexts/UserContext";
import ProfileContext from "../contexts/ProfileContext";
import ModalSignIn from "./auth/ModalSignIn";
import ModalContext from "../contexts/ModalContext";
import SearchBar from "../components/subComponents/SearchBar";
import { Menu, Button, Icon, Image, Dropdown } from "semantic-ui-react";

const NavBar = ({ history, location }) => {
  const { setUserData } = useContext(UserContext);
  const { setProfileData } = useContext(ProfileContext);
  const [open, setOpen] = useState(false);

  const { modal, setModal } = useContext(ModalContext);

  let token = localStorage.getItem("token");
  let profileImage = localStorage.getItem("profilePicture");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDash = () => {
    handleOpen();
    history.push("/dashboard");
  };

  const logout = () => {
    handleOpen();
    localStorage.clear();
    setUserData({});
    setProfileData({});
    history.push("/");
  };

  const body = (
    <Dropdown.Menu size="small" vertical attached="top">
      <Dropdown.Item>
        <Link to="/profile">
          <Icon name="user" /> Profile
        </Link>
      </Dropdown.Item>
      <Dropdown.Item onClick={handleDash}>
        <Icon name="dashboard" /> Dashboard
      </Dropdown.Item>
      <Dropdown.Item onClick={logout}>
        <Icon name="external square alternate" /> LogOut
      </Dropdown.Item>
    </Dropdown.Menu>
  );

  return (
    <Menu size="mini" stackable secondary style={{ backgroundColor: "#f2f2f2" }}>
      <Menu.Item>
        <Link className="link" to="/">
          <Image size="small" src={Logo} alt="Find Ur City Logo" />
        </Link>
      </Menu.Item>

      <Menu.Menu position="right">
        {location.pathname.includes("/cityview") ? (
          <Menu.Item>
            <SearchBar />
          </Menu.Item>
        ) : (
          <span></span>
        )}

        {token ? (
          <Menu.Item position="right" attached="top">
            <Dropdown.Item simple>
              <Image
                avatar
                src={
                  !((profileImage === "null") | (profileImage === null))
                    ? profileImage
                    : profiledefault
                }
                alt="profile avatar"
                onClick={handleOpen}
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                }}
              />
              {open ? body : <span></span>}
            </Dropdown.Item>
          </Menu.Item>
        ) : (
          <Menu.Item position="right">
            <Button onClick={() => setModal(true)}>Sign In</Button>
            <ModalSignIn modal={modal} setModal={setModal} history={history} />
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
