import React, { FC } from "react";
import { ToggleButton, ToggleButtonGroup, FormControl } from "@mui/material";
import { useTranslation } from "react-i18next";

interface GuessSelectorProps {
  value?: number;
  onChange: (newValue: number) => void;
}

const GuessSelector: FC<GuessSelectorProps> = ({ value, onChange }) => {
  const { t } = useTranslation();

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
        <ToggleButton value={1}>{t("even")}</ToggleButton>
        <ToggleButton value={0}>{t("odd")}</ToggleButton>{" "}
      </ToggleButtonGroup>
    </FormControl>
  );
};

export default GuessSelector;
