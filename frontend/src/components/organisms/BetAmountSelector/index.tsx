import React, { FC } from "react";
import { makeStyles } from "@mui/styles";

import { theme } from "@/config/theme";

import TextField from "@mui/material/TextField";
import { useConnectionSync } from "@/hooks";

const useStyles = makeStyles({
  defaultStyle: {},
  connectedStyle: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "24px",
      color: "white",

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
        borderWidth: "2px", // thick border by default
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
        borderWidth: "1px", // thin border on hover
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
        borderWidth: "2px", // thick border on active/focused
      },
    },
  },
});

interface BetAmountSelectorProps {
  value: number | string;
  onChange: (newValue: number) => void;
}

const BetAmountSelector: FC<BetAmountSelectorProps> = ({ value, onChange }) => {
  const isConnected = useConnectionSync();
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    onChange(newValue);
  };

  return (
    <TextField
      className={isConnected ? classes.connectedStyle : classes.defaultStyle}
      id="bet-amount-selector"
      label="Bet Amount"
      type="number"
      helperText="1 to 99 FFC per Bet"
      value={value}
      onChange={handleChange}
      inputProps={{
        min: 1,
        max: 99,
      }}
    />
  );
};

export default BetAmountSelector;
