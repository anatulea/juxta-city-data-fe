import React from "react";
import AddProfile from "./AddProfile";
import { Modal } from "semantic-ui-react";

const ModalAddProfile = ({ openAdd, setOpenAdd, history }) => {
  return (
    <Modal
      closeIcon
      dimmer="blurring"
      style={{
        backgroundColor: "#f8f8f8",
        width: "400px",
        border: "1px solid balck",
      }}
      open={openAdd}
      onClose={() => setOpenAdd(false)}
      onOpen={() => setOpenAdd(true)}
    >
      <div className="sign-in-up-modal">
        <AddProfile history={history} />
      </div>
    </Modal>
  );
};

export default ModalAddProfile;
