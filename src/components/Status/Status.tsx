import React, { useState, useEffect } from "react";
import { getCards, setCards } from "../../utils/storageUtils";
import { Flex1Column, Flex1 } from "../@styled/BaseElements";
import Card from "../Card";
import "./Status.css";

const Status = () => {
  //   const [statuses, setAllStatuses] = useState<string[]>([]);
  const [cards, setAllCards] = useState<any>({});
  useEffect(() => {
    // const allStatus = JSON.parse(getStatuses());
    const allCards = JSON.parse(getCards());
    // setAllStatuses(allStatus);
    setAllCards(allCards);
  }, []);
  //   useEffect(() => {
  //     setStatuses(JSON.stringify(statuses));
  //   }, [statuses]);

  useEffect(() => console.log(cards), [cards]);

  const addStatus = (e: any) => {
    if (e.key === "Enter") {
      if (
        e.target.value === "" ||
        Object.keys(cards).indexOf(e.target.value) !== -1
      )
        return;
      //   setAllStatuses([...statuses, e.target.value]);
      setAllCards({ ...cards, [e.target.value]: [] });
      e.target.value = "";
      return;
    }
  };

  const addCard = (e: any, status: string) => {
    if (e.key === "Enter") {
      if (e.target.value === "") return;
      const vals = cards[status] || [];
      const newAllCards = { ...cards, [status]: [...vals, e.target.value] };
      setAllCards(newAllCards);
      setCards(JSON.stringify(newAllCards));
      e.target.value = "";
      return;
    }
  };

  return (
    <Flex1 style={{ justifyContent: "center" }}>
      {Object.keys(cards).map((status) => (
        <Flex1Column className="statusDivs" key={status}>
          {status}
          {cards[status] &&
            cards[status].map((card: any) => <Card card={card} />)}
          <input
            name="addCard"
            placeholder="new"
            onKeyPress={(e) => addCard(e, status)}
          />
        </Flex1Column>
      ))}
      <Flex1Column className="statusDivs" key={"newStatus"}>
        <input
          name="addStatus"
          placeholder="Add a Group"
          onKeyPress={(e) => addStatus(e)}
        />
      </Flex1Column>
    </Flex1>
  );
};

export default Status;
