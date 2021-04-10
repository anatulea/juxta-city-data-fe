import React, { useState } from "react";
import SurveyQuestions from "./SurveyQuestions";
import { Modal, Button } from "semantic-ui-react";

const ModalSurvey = (props) => {
  const [openSurvey, setOpenSurvey] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpenSurvey(true)}
        alt="Take the survey button"
        style={{
          backgroundColor: "#0074cc",
          color: "white",
          width: "200px",
          margin: "10px 0",
        }}
        className="animate__animated animate__bounceIn"
      >
        Take survey
      </Button>
      <Modal
        size="large"
        closeIcon
        dimmer="blurring"
        open={openSurvey}
        onClose={() => setOpenSurvey(false)}
        onOpen={() => setOpenSurvey(true)}
      >
        <div className="modal">
          <SurveyQuestions
            setOpenSurvey={setOpenSurvey}
            history={props.history}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ModalSurvey;
