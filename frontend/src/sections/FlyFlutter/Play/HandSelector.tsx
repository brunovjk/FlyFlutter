import React, { useEffect, useState } from "react";
import { ButtonGroup, FormControl, Button } from "@mui/material";

type HandType = 0 | 1 | 2 | 3 | 4 | 5;

interface HandFormControlProps {
  onChange: (newValue: number) => void;
}

const HandSelector = ({ onChange }: HandFormControlProps) => {
  const handleHandChange = (hand: HandType) => {
    onChange(hand);
  };
  const handArray: HandType[] = [0, 1, 2, 3, 4, 5];
  return (
    <FormControl component="fieldset">
      <ButtonGroup aria-label="hand selection">
        {handArray.map((hand) => (
          <Button key={hand} onClick={() => handleHandChange(hand)}>
            {hand.toString()}
          </Button>
        ))}
      </ButtonGroup>
    </FormControl>
  );
};

export default HandSelector;
