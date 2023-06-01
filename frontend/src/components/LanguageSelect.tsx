import React, { FC } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

interface LanguageOption {
  value: typeof i18next.language;
  emoji: string;
}

const languageOptions: LanguageOption[] = [
  { value: "en-US", emoji: "🌐" }, // English "en-US"
  { value: "es-ES", emoji: "🇪🇸" }, // Spanish "es-ES"
  { value: "fr-FR", emoji: "🇫🇷" }, // French "fr-FR"
  { value: "ja-JP", emoji: "🇯🇵" }, // Japanese "ja-JP"
  { value: "pt-BR", emoji: "🇧🇷" }, // Brazilian Portuguese "pt-BR
  { value: "zh-CN", emoji: "🇨🇳" }, // Chinese "zh-CN"
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
