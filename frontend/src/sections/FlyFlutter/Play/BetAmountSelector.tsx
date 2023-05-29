import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";

interface BetAmountSelectorProps {
  value?: number;
  onChange: (newValue: number | undefined) => void;
}

const BetAmountSelector: FC<BetAmountSelectorProps> = ({ value, onChange }) => {
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    let newValue: number | undefined;

    if (input === "") {
      newValue = undefined;
    } else {
      newValue = parseInt(input, 10);
      if (isNaN(newValue) || newValue < 1 || newValue > 99) {
        newValue = value; // Revert to the previous value if the input is invalid
      }
    }

    onChange(newValue);
  };

  return (
    <TextField
      id="bet-amount-selector"
      label={t("betAmountSelector.label")}
      type="number"
      helperText={t("betAmountSelector.helperText")}
      value={value === undefined ? "" : String(value)}
      onChange={handleChange}
      inputProps={{
        min: 1,
        max: 99,
      }}
    />
  );
};

export default BetAmountSelector;
