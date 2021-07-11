import React, { useState } from "react";
import { Flex, Flex1, Flex1Column, FlexRow } from "../@styled/BaseElements";
import Modal from "react-modal";
import "./Card.css";

const Card = ({
  card,
  deleteCard,
  drag,
  status,
  changeCardName,
  changeCardDesc,
}: any) => {
  const [showModal, setShowModal] = useState(false);
  const [cardName, setCardName] = useState(card.name);
  const [desc, setDesc] = useState(card.desc);
  return (
    <Flex draggable="true" onDragStart={(e) => drag(e, card)}>
      <Flex1 onClick={() => setShowModal(true)} className="card">
        <div>{card.name}</div>
        <div className="actionButton">
          <button onClick={() => deleteCard(card.id)}>
            <span className="material-icons">delete</span>
          </button>
        </div>
      </Flex1>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        shouldCloseOnOverlayClick={true}
      >
        <Flex1Column className="modal">
          <FlexRow className="titleRow" style={{ justifyContent: "center" }}>
            Card Content
          </FlexRow>
          <FlexRow className="titleRow">
            <input
              name="cardTitle"
              className="titleRow"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              onBlur={(e) => changeCardName(e.target.value, card.id, status)}
            />
          </FlexRow>
          <FlexRow className="modalContent">
            <span className="label">Status:</span>
            {status}{" "}
          </FlexRow>
          <FlexRow className="modalContent">
            <span className="label">Description:</span>
          </FlexRow>
          <FlexRow className="descRow">
            <input
              name="cardDesc"
              className="descRowInput"
              width="100%"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              onBlur={(e) => changeCardDesc(e.target.value, card.id, status)}
            />
          </FlexRow>
        </Flex1Column>
      </Modal>
    </Flex>
  );
};

export default Card;
