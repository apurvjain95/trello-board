import React from "react";
import { Flex, Flex1Column } from "../@styled/BaseElements";
import "./MonthPicker.css";

const MonthPicker = (props: any) => {
  return (
    <Flex
      style={{
        flexDirection: "column",
        padding: "10px",
        alignItems: "flex-start",
        flex: 1,
      }}
    >
      <span
        style={{
          fontSize: 12,
          fontWeight: 500,
          display: "inline-block",
          margin: "0 0 5px 5px",
        }}
      >
        {props.label}
      </span>
      <span
        className="monthDivStyle"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            props.increaseMonth();
          }
          if (event.key === "ArrowLeft") {
            props.decreaseMonth();
          }
        }}
      >
        <button
          style={{
            border: "none",
            background: "none",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#868686",
          }}
          disabled={
            props.currentMonth === props.month - 1 &&
            props.currentYear === props.year
          }
          onClick={() => props.decreaseMonth()}
        >
          &lt;
        </button>
        <Flex1Column style={{ justifyContent: "space-evenly" }}>
          <div style={{ color: "black", fontWeight: "bold" }}>
            {props.months[props.month]}
          </div>
          <div style={{ fontSize: "13px" }}>{props.year}</div>
        </Flex1Column>
        <button
          style={{
            border: "none",
            background: "none",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#868686",
          }}
          onClick={() => props.increaseMonth()}
        >
          &gt;
        </button>
      </span>
    </Flex>
  );
};

export default MonthPicker;
