import { even, odd } from "../copy";

export const guessConverter = (guess: number | undefined) => {
  if (guess === 0) {
    return even;
  } else if (guess === 1) {
    return odd;
  } else {
    return undefined;
  }
};
