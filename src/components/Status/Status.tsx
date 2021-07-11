import React, { useState, useEffect } from "react";
import { getCards, setCards } from "../../utils/storageUtils";
import { Flex1Column, Flex1 } from "../@styled/BaseElements";
import Card from "../Card";
import "./Status.css";

const Status = () => {
  const [cards, setAllCards] = useState<any>({});
  useEffect(() => {
    const allCards = JSON.parse(getCards());
    setAllCards(allCards);
  }, []);

  useEffect(() => setCards(JSON.stringify(cards)), [cards]);

  const drop = (e: any, status: string) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const prevStatus = data.split("*")[0];
    const draggedCard = JSON.parse(data.split("*")[1]);
    if (status !== prevStatus) {
      const latestDeletingCard = cards[prevStatus].filter(
        (card: any) => card.id !== draggedCard.id
      );
      const latestAddingCard = [
        ...cards[status],
        {
          ...draggedCard,
          id: `${cards[status].length}-${draggedCard.name}`,
        },
      ];
      const allCards = {
        ...cards,
        [prevStatus]: latestDeletingCard,
        [status]: latestAddingCard,
      };
      setAllCards(allCards);
      setCards(JSON.stringify(allCards));
    }
  };

  const allowDrop = (e: any) => {
    e.preventDefault();
  };

  const drag =
    ({ status }: { status: string }) =>
    (e: any, card: any) => {
      e.dataTransfer.setData("text/plain", `${status}*${JSON.stringify(card)}`);
    };

  const addStatus = (e: any) => {
    if (e.key === "Enter") {
      if (
        e.target.value === "" ||
        Object.keys(cards).indexOf(e.target.value) !== -1
      )
        return;
      setAllCards({ ...cards, [e.target.value]: [] });
      e.target.value = "";
      return;
    }
  };

  const addCard = (e: any, status: string) => {
    if (e.key === "Enter") {
      const targetVal = e.target.value;
      if (targetVal === "") return;
      const vals = cards[status] || [];
      const newAllCards = {
        ...cards,
        [status]: [
          ...vals,
          { id: `${vals.length}-${targetVal}`, name: targetVal, desc: "" },
        ],
      };
      setAllCards(newAllCards);
      setCards(JSON.stringify(newAllCards));
      e.target.value = "";
      return;
    }
  };

  const deleteCard =
    ({ status }: { status: string }) =>
    (cardId: string) => {
      const latestCards = cards[status].filter(
        (card: any) => card.id !== cardId
      );
      setAllCards({ ...cards, [status]: [...latestCards] });
    };

  const changeCardName = (newName: string, id: string, status: string) => {
    const latestCards = cards[status].reduce((allCards: any[], card: any) => {
      if (card.id === id) return [...allCards, { ...card, name: newName }];
      return [...allCards, card];
    }, []);
    const allCards = { ...cards, [status]: latestCards };
    setCards(allCards);
    setAllCards(allCards);
  };

  const changeCardDesc = (newDesc: string, id: string, status: string) => {
    const latestCards = cards[status].reduce((allCards: any[], card: any) => {
      if (card.id === id) return [...allCards, { ...card, desc: newDesc }];
      return [...allCards, card];
    }, []);
    const allCards = { ...cards, [status]: latestCards };
    setCards(allCards);
    setAllCards(allCards);
  };

  return (
    <Flex1 style={{ justifyContent: "center" }}>
      {Object.keys(cards).map((status) => (
        <Flex1Column
          className="statusDivs"
          key={status}
          onDrop={(event) => drop(event, status)}
          onDragOver={(event) => allowDrop(event)}
        >
          <div className="statusName">
            {status}{" "}
            <span style={{ color: "gray", paddingLeft: "10px" }}>
              {cards[status].length}
            </span>
          </div>
          {cards[status] &&
            cards[status].map((card: any) => (
              <Card
                card={card}
                key={card.id}
                deleteCard={deleteCard.bind(this, { status })()}
                drag={drag.bind(this, { status })()}
                status={status}
                changeCardName={changeCardName}
                changeCardDesc={changeCardDesc}
              />
            ))}
          <input
            className="input"
            name="addCard"
            placeholder="+ New"
            onKeyPress={(e) => addCard(e, status)}
          />
        </Flex1Column>
      ))}
      <Flex1Column className="statusDivs" key={"newStatus"}>
        <input
          className="input"
          name="addStatus"
          placeholder="+ Add a Group"
          onKeyPress={(e) => addStatus(e)}
        />
      </Flex1Column>
    </Flex1>
  );
};

export default Status;
