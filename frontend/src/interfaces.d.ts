interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

interface NumberInputProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

interface AmountSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

interface CircularLoadingProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}

type PlaceBetTxResult = {
  success: boolean;
  hash?: string;
  message: string;
};

type PlaceBetTxProps = {
  player: `0x${string}` | undefined;
  betFee: number | ethers.BigNumber | undefined;
  selectedHand: number;
  selectedGuess: number;
  selectedBetAmount: number;
};

interface Bet {
  playerAddress: string;
  playerHand: number;
  playerGuess: number;
  betAmount: number;
  houseHand: number;
  requestId: string;
  taskId: string;
  waitingFulfillment: boolean;
  waitingCloseBet: boolean;
  winner: string;
}
