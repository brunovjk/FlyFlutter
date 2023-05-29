import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";

interface BetAmountSelectorProps {
  value?: number;
  onChange: (newValue: number) => void;
}

const BetAmountSelector: FC<BetAmountSelectorProps> = ({ value, onChange }) => {
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    onChange(newValue);
  };

  return (
    <TextField
      id="bet-amount-selector"
      label={t("betAmountSelector.label")}
      type="number"
      helperText={t("betAmountSelector.helperText")}
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
