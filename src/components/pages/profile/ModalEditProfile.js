import React from "react";
import EditUser from "./EditUser";
import { Modal } from "semantic-ui-react";

const ModalEditProfile = ({ modal, setModal, history }) => {
  return (
    <Modal
      closeIcon
      dimmer="blurring"
      size="mini"
      
      open={modal}
      onClose={() => setModal(false)}
      onOpen={() => setModal(true)}
    >
      <div className="modal">
        <EditUser history={history} />
      </div>
    </Modal>
  );
};

export default ModalEditProfile;
