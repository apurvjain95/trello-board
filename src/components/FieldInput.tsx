import React from "react";
import { Flex, FlexRow } from "./@styled/BaseElements";

const FieldInput = (props: any) => {
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
      <FlexRow
        style={{
          width: "100%",
          border: "1px solid lightgray",
          borderRadius: "4px",
          color: "gray",
          height: "40px",
          alignItems: "center",
        }}
      >
        <div style={{ paddingLeft: "10px" }}>$</div>
        <input
          {...props}
          style={{
            border: 0,
            paddingLeft: "10px",
            color: "#4d6475",
            outline: "none",
            fontSize: "18px",
            fontWeight: "bolder",
          }}
        />
      </FlexRow>
    </Flex>
  );
};

export default FieldInput;
