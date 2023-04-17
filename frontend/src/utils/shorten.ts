// Shorten Ethereum addresses
export const shortenAddress = (address: string, digits = 4): string => {
  if (!address) return "";
  const prefix = address.substring(0, digits);
  const suffix = address.substring(address.length - digits);
  return `${prefix}...${suffix}`;
};

// Shorten bytes
export const shortenBytes = (bytes: string, digits = 4): string => {
  if (!bytes) return "";
  const prefix = bytes.substring(0, digits);
  const suffix = bytes.substring(bytes.length - digits);
  return `${prefix}...${suffix}`;
};

// Shorten large numbers
export const shortenNumber = (num: number, digits = 4): string => {
  if (!num) return "";
  const suffixes = ["", "K", "M", "B", "T"];
  const suffixNum = Math.floor(("" + num).length / 3);
  let shortNum = parseFloat(
    (suffixNum !== 0 ? num / Math.pow(1000, suffixNum) : num).toFixed(digits)
  );
  if (shortNum % 1 !== 0) {
    shortNum = parseFloat(shortNum.toFixed(digits));
  }
  return shortNum + suffixes[suffixNum];
};
