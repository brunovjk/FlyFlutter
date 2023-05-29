import { TFunction } from "i18next";

export const guessConverter = (
  guess: number | undefined,
  t: TFunction<"translation", undefined, "translation">
) => {
  if (guess === 0) {
    return `${t("even")}`;
  } else if (guess === 1) {
    return `${t("odd")}`;
  } else {
    return undefined;
  }
};

export const houseConverter = (
  guess: number | undefined,
  t: TFunction<"translation", undefined, "translation">
) => {
  if (guess === 1) {
    return `${t("even")}`;
  } else if (guess === 0) {
    return `${t("odd")}`;
  } else {
    return undefined;
  }
};
