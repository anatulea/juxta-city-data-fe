import React, { useState } from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import ModalAddProfile from "./ModalAddProfile";

const AddProfileBox = ({ profileData }) => {
  const [openAdd, setOpenAdd] = useState(false);
  
  return profileData.length === 1 ? (
    <span></span>
  ) : (
    <Segment placeholder>
      <Header icon>
        <Icon name="user outline" />
        Complete your profile information
      </Header>
      <Button primary onClick={() => setOpenAdd(true)}>
        Complete
      </Button>
      <ModalAddProfile openAdd={openAdd} setOpenAdd={setOpenAdd} />
    </Segment>
  );
};

export default AddProfileBox;
