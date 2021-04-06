import React, { useContext, useState } from "react";
import { deleteProfile } from "../../../functions";
import ImageUpload from "./ImageUpload";
import profiledefault from "../../../assets/userProfile.png";
import "../../../index.scss";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import ModalEditProfile from "./ModalEditProfile";
import ModalContext from "../../../contexts/ModalContext";
import ModalDeleteProfile from "./ModalDeleteProfile";

const InfoList = ({ info }) => {
  const [openDel, setOpenDel] = useState(false);
  const { modal, setModal } = useContext(ModalContext);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = () => {
    setOpenDialog(true);
  };

  const deleteUserProfile = () => {
    deleteProfile(info.id).then(() => window.location.reload());
    localStorage.setItem("profilePicture", null);
  };

  let dateOfBirthNew;
  if (info.dob !== null) {
    const dateOfBirthOld = new Date(
      info.dob.replace(/-/g, "/").replace(/T.+/, "")
    );
    dateOfBirthNew = dateOfBirthOld.toLocaleDateString("en-US");
  }

  return (
    <Card style={{ marginTop: "20px" }} fluid>
      <Card
        className="image"
        fluid
        style={{ position: "relative", marginBottom: "0px" }}
      >
        <Image
          src={
            !((info.image_url === "null") | (info.image_url === null))
              ? info.image_url
              : profiledefault
          }
          alt=""
          wrapped
          ui={false}
        />
        <Icon
          onClick={handleOpen}
          name="camera"
          size="large"
          style={{
            position: "absolute",
            top: "88%",
            left: "88%",
            color: "#5DADE2",
          }}
        />
      </Card>
      <ImageUpload
        info={info}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
      <Card.Content>
        <Card.Header>
          {" "}
          {info.first_name} {info.last_name}{" "}
        </Card.Header>
        <Card.Description> {info.username}</Card.Description>
        <Card.Meta>{info.email}</Card.Meta>
        <Card.Meta>{dateOfBirthNew}</Card.Meta>
        <Card.Description>
          <Icon name="map marker alternate" color="blue" />
          {info.city}, {info.state} {info.zip}
        </Card.Description>

        <div className="info-btn-wrapper">
          <div>
            <Icon
              name="edit outline"
              className="info-btn"
              onClick={() => setModal(true)}
            />
            <p> Edit Profile</p>
          </div>
          <ModalEditProfile modal={modal} setModal={setModal} />
          <div>
            <Icon
              name="trash alternate outline"
              className="info-btn"
              onClick={() => setOpenDel(true)}
            />
            <p>Delete Profile</p>
          </div>
          <ModalDeleteProfile
            deleteUserProfile={deleteUserProfile}
            openDel={openDel}
            setOpenDel={setOpenDel}
          />
        </div>
      </Card.Content>
    </Card>
  );
};
export default InfoList;
