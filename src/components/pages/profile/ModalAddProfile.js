import React from "react";
import AddProfile from "./AddProfile";
import { Modal } from "semantic-ui-react";

const ModalAddProfile = ({ openAdd, setOpenAdd, history }) => {
  return (
    <Modal
      closeIcon
      dimmer="blurring"
      size="mini"
      
      open={openAdd}
      onClose={() => setOpenAdd(false)}
      onOpen={() => setOpenAdd(true)}
    >
      <div className="modal">
        <AddProfile history={history} />
      </div>
    </Modal>
  );
};

export default ModalAddProfile;
