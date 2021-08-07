import React, { useEffect, useState } from "react";
import { Flex1Column, Flex1Row } from "../@styled/BaseElements";
import FieldInput from "../FieldInput";
import MonthPicker from "../MonthPicker/MonthPicker";
import house from "../../img/house.png";
import "./GoalComponent.css";

const GoalComponent = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [goalAmount, setGoalAmount] = useState(0);
  const [monthlyAmount, setMonthlyAmount] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [month, setMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(0);
  const [year, setYear] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  useEffect(() => {
    setGoalAmount(1000);
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    setCurrentMonth(month);
    setCurrentYear(year);
    if ((month + 4) / 12 > 0) {
      setMonth((month + 4) % 12);
      setYear(year + Math.floor((month + 4) / 12));
    } else {
      setMonth(month + 4);
      setYear(year);
    }
  }, []);
  useEffect(() => {
    let totalMonthsForTarget;
    if (year === currentYear) {
      totalMonthsForTarget = month - currentMonth;
    } else {
      totalMonthsForTarget =
        month + 1 + (11 - currentMonth) + (year - currentYear - 1) * 12;
    }
    setTotalDuration(totalMonthsForTarget);
    setMonthlyAmount(Math.ceil(goalAmount / totalMonthsForTarget));
  }, [goalAmount, month, year, currentYear, currentMonth]);

  const increaseMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
      return;
    }
    setMonth(month + 1);
  };

  const decreaseMonth = () => {
    if (currentYear === year && currentMonth === month - 1) return;
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
      return;
    }
    setMonth(month - 1);
  };

  return (
    <Flex1Column className="mainGoalCalc">
      <Flex1Row style={{ padding: "10px", paddingTop: "20px" }}>
        <img src={house} alt="house" height="40px" />
        <Flex1Column
          className="heading"
          style={{
            alignItems: "flex-start",
            marginLeft: "10px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "18px" }}>
            New Gaming Setup
          </div>
          <div style={{ color: "gray", fontSize: "13px" }}>Your goal</div>
        </Flex1Column>
      </Flex1Row>
      <Flex1Row
        style={{
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <FieldInput
          label="Total Amount"
          value={goalAmount}
          onChange={(val: any) => {
            setGoalAmount(
              parseInt(isNaN(parseInt(val.target.value)) ? 0 : val.target.value)
            );
          }}
        />
        <MonthPicker
          label="Reach goal by"
          months={months}
          month={month}
          year={year}
          currentMonth={currentMonth}
          currentYear={currentYear}
          increaseMonth={increaseMonth}
          decreaseMonth={decreaseMonth}
        />
      </Flex1Row>
      <Flex1Column
        style={{
          margin: "20px",
          marginTop: "0px",
          border: "1px solid lightgray",
          borderRadius: "4px",
        }}
      >
        <Flex1Row
          style={{
            padding: "20px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: "bold" }}>Monthly amount</div>
          <div
            style={{ color: "#0179ff", fontWeight: "bold", fontSize: "25px" }}
          >
            ${monthlyAmount}
          </div>
        </Flex1Row>
        <Flex1Row
          style={{
            padding: "20px",
            justifyContent: "flex-start",
            textAlign: "initial",
            backgroundColor: "#f4f8fa",
            fontSize: 13,
          }}
        >
          <div>
            You're planning to save{" "}
            <span style={{ fontWeight: "bold" }}>${monthlyAmount} </span>
            for{" "}
            <span style={{ fontWeight: "bold" }}>{totalDuration} months </span>
            to reach your goal of{" "}
            <span style={{ fontWeight: "bold" }}>${goalAmount || 0} </span>
            by{" "}
            <span style={{ fontWeight: "bold" }}>
              {months[month]} {year}.
            </span>
          </div>
        </Flex1Row>
      </Flex1Column>
      <Flex1Row style={{ margin: 20, marginTop: 0, justifyContent: "center" }}>
        <button
          style={{
            background: "#1b31a8",
            color: "white",
            fontWeight: "bold",
            fontSize: "15px",
            padding: "15px",
            width: "100%",
            maxWidth: "300px",
            border: "none",
            borderRadius: "25px",
          }}
        >
          Confirm
        </button>
      </Flex1Row>
    </Flex1Column>
  );
};

export default GoalComponent;
