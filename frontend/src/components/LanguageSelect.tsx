import React, { FC, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

interface LanguageOption {
  value: string;
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
  const [language, setLanguage] = useState("en"); // Initial language state

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
    <FormControl variant="standard">
      <Select value={language} onChange={handleLanguageChange}>
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
