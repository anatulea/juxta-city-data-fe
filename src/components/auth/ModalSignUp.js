import React from "react";
import SignUp from "./SignUp";
import { Modal } from "semantic-ui-react";

const ModalSignUp = ({ modal, setModal, history }) => {
  return (
    <Modal
      closeIcon
      dimmer="blurring"
      size='tiny'
  
      open={modal}
      onClose={() => setModal(false)}
      onOpen={() => {
        setModal(true);
      }}
    >
      <div className="modal">
        <SignUp history={history}  onClose={() => setModal(false)}/>
      </div>
    </Modal>
  );
};

export default ModalSignUp;
