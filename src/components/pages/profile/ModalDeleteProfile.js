import React from "react";
import { Modal, Header, Icon, Button } from "semantic-ui-react";

const ModalDeleteProfile = ({ openDel, setOpenDel, deleteUserProfile }) => {

  const handleYes = () => {
    deleteUserProfile();
    setOpenDel(false);
  };
  return (
    <Modal
      closeIcon
      dimmer="blurring"
      size = "tiny"
      
      open={openDel}
      onClose={() => setOpenDel(false)}
      onOpen={() => setOpenDel(true)}
    >
      <div className="modal">
        <Header icon="trash" content="Delete Profile" />
        <hr />
        <Modal.Content>
          <h4>Are you sure you want to delete your profile information?</h4>
        </Modal.Content>
        <hr />
        <Modal.Actions>
          <Button color="grey" onClick={() => setOpenDel(false)}>
            <Icon name="remove" /> Cancel
          </Button>
          <Button color="red" onClick={handleYes}>
            <Icon name="checkmark" /> Delete
          </Button>
        </Modal.Actions>
      </div>
    </Modal>
  );
};

export default ModalDeleteProfile;
