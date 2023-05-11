import React, { FC } from "react";
import { CustomButton } from "@/components/atoms";
import { ButtonGroup, FormControl, FormLabel } from "@mui/material";

interface GuessSelectorProps {
  value: number | string;
  onChange: (newValue: number) => void;
}

const GuessSelector: FC<GuessSelectorProps> = ({ value, onChange }) => {
  const handleChange = (newValue: number) => {
    onChange(newValue);
  };

  return (
    <FormControl component="fieldset">
      <ButtonGroup aria-label="guess selection">
        <CustomButton onClick={() => handleChange(1)} pressed={value === 1}>
          Odd
        </CustomButton>
        <CustomButton onClick={() => handleChange(0)} pressed={value === 0}>
          Even
        </CustomButton>
      </ButtonGroup>
    </FormControl>
  );
};

export default GuessSelector;
