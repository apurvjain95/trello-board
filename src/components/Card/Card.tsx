import React from "react";
import { Flex } from "../@styled/BaseElements";
import "./Card.css";

const card = ({ card, deleteCard }: any) => {
  return (
    <Flex draggable="true" className="card">
      <div>{card.name}</div>
      <div className="actionButton">
        <button onClick={() => deleteCard(card.id)}>
          <span className="material-icons">delete</span>
        </button>
      </div>
    </Flex>
  );
};

export default card;
