import React from "react";
import SignIn from "./SignIn";
import { Modal } from "semantic-ui-react";

const ModalSignIn = ({ modal, setModal, history }) => {
  return (
    <Modal
      closeIcon
      dimmer="blurring"
      size='tiny'
      open={modal}
      onClose={() => setModal(false)}
      onOpen={() => setModal(true)}
    >
      <div className="modal">
        <SignIn history={history} setModal={setModal} onClose={() => setModal(false)}/>
      </div>
    </Modal>
  );
};

export default ModalSignIn;
