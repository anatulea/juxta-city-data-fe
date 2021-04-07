import React from "react";
import SurveyOptions from "./SurveyOptions";
import SimpleModal from "./simpleModal/SimpleModal";
import { Segment, Header, Container } from "semantic-ui-react";

const SurveyQuestion = ({ item, formState, updateState }) => {
  return (
    <Container fluid>
      <Header
        data-testid="question"
        style={{ display: "flex", flexDirection: "row" }}
      >
        {item.question}{" "}
        {item.question ===
          `What is an acceptable cost of living index for your new city?` && (
          <SimpleModal />
        )}
      </Header>

      <Segment.Group horizontal data-testid="options-list">
        {item.options.map((option, index) => (
          <SurveyOptions
            key={index}
            name={item.name}
            value={option.value}
            formState={formState}
            updateState={updateState}
            description={option.description}
          />
        ))}
      </Segment.Group>
    </Container>
  );
};

export default SurveyQuestion;
