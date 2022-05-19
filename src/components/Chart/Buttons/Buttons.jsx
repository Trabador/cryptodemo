import React from "react";
import { Button } from "@mui/material";
import timeOptions from "../../../utils/config";
import "./Buttons.css";

const Buttons = ({ setDays, days }) => {
  return (
    <div className="buttonsContainer">
      {timeOptions.map((option) => (
        <Button
          className="customButton"
          variant="outlined"
          key={option.label}
          onClick={() => setDays(option.value)}
          style={
            days === option.value
              ? { backgroundColor: "rgb(110, 106, 106)" }
              : null
          }
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default Buttons;
