import React, { FC } from "react";
import TextField from "@mui/material/TextField";

interface BetAmountSelectorProps {
  onChange: (newValue: number) => void;
}

const BetAmountSelector: FC<BetAmountSelectorProps> = ({ onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    onChange(newValue);
  };

  return (
    <TextField
      id="bet-amount-selector"
      label="Bet Amount"
      type="number"
      helperText="1 to 99 FFC per Bet"
      onChange={handleChange}
      inputProps={{
        min: 1,
        max: 99,
      }}
    />
  );
};

export default BetAmountSelector;
