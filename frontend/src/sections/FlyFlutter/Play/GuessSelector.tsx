import React, { FC } from "react";
import { ButtonGroup, FormControl, Button } from "@mui/material";
import { even, odd } from "../../../copy";

interface GuessSelectorProps {
  onChange: (newValue: number) => void;
}

const GuessSelector: FC<GuessSelectorProps> = ({ onChange }) => {
  const handleChange = (newValue: number) => {
    onChange(newValue);
  };

  return (
    <FormControl component="fieldset">
      <ButtonGroup aria-label="guess selection">
        <Button onClick={() => handleChange(1)}>{odd}</Button>
        <Button onClick={() => handleChange(0)}>{even}</Button>
      </ButtonGroup>
    </FormControl>
  );
};

export default GuessSelector;
