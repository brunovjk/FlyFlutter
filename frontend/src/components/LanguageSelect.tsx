import React, { FC } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

interface LanguageOption {
  value: typeof i18next.language;
  emoji: string;
}

const languageOptions: LanguageOption[] = [
  { value: "en", emoji: "🌐" }, // English
  { value: "es", emoji: "🇪🇸" }, // Spanish
  { value: "fr", emoji: "🇫🇷" }, // French
  { value: "it", emoji: "🇮🇹" }, // Italian
  { value: "de", emoji: "🇩🇪" }, // German
  { value: "ua", emoji: "🇺🇦" }, // Ukrainian
  { value: "pt-BR", emoji: "🇧🇷" }, // Brazilian Portuguese
  { value: "kr", emoji: "🇰🇷" }, // Korean
  { value: "ch", emoji: "🇨🇳" }, // Chinese
  { value: "ja", emoji: "🇯🇵" }, // Japanese
  { value: "ph", emoji: "🇵🇭" }, // Philippines
];

const LanguageSelect: FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <FormControl variant="standard">
      <Select value={i18n.language} onChange={handleLanguageChange}>
        {languageOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.emoji}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
