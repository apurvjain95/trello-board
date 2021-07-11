import React from "react";
import "./App.css";
import Status from "./components/Status";
import { Flex1Row } from "./components/@styled/BaseElements";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
