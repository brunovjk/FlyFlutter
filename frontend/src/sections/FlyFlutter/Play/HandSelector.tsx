import React from "react";
import { ToggleButton, ToggleButtonGroup, FormControl } from "@mui/material";

type HandType = 0 | 1 | 2 | 3 | 4 | 5;

interface HandFormControlProps {
  value?: number;
  onChange: (newValue: number) => void;
}

const HandSelector = ({ value, onChange }: HandFormControlProps) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: HandType
  ) => {
    onChange(newValue);
  };

  const handArray: HandType[] = [0, 1, 2, 3, 4, 5];
  return (
    <FormControl component="fieldset">
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={handleChange}
        aria-label="hand selection"
      >
        {handArray.map((hand) => (
          <ToggleButton key={hand} value={hand}>
            {hand.toString()}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </FormControl>
  );
};

export default HandSelector;
