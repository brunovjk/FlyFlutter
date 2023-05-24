import React, { FC } from "react";
import { ToggleButton, ToggleButtonGroup, FormControl } from "@mui/material";
import { even, odd } from "../../../copy";

interface GuessSelectorProps {
  value?: number;
  onChange: (newValue: number) => void;
}

const GuessSelector: FC<GuessSelectorProps> = ({ value, onChange }) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    onChange(newValue);
  };

  return (
    <FormControl component="fieldset">
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={handleChange}
        aria-label="guess selection"
      >
        <ToggleButton value={1}>{odd}</ToggleButton>
        <ToggleButton value={0}>{even}</ToggleButton>
      </ToggleButtonGroup>
    </FormControl>
  );
};

export default GuessSelector;
