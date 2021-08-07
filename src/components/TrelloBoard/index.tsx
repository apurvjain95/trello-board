import React from "react";
import { Flex1Row } from "../@styled/BaseElements";
import Status from "../Status";

const TrelloBoard = () => {
  return (
    <>
      <div className="appHeading">Task Board</div>
      <Flex1Row className="username">UserName</Flex1Row>
      <Flex1Row
        style={{
          minHeight: "90%",
          overflowX: "scroll",
        }}
      >
        <Status />
      </Flex1Row>
    </>
  );
};

export default TrelloBoard;
