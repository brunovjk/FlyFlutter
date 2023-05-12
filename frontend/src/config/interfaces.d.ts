interface AppAlertProps {
  isOpen: boolean;
  severity: "info" | "success" | "warning" | "error";
  message: string;
  handleClose?: () => void;
}

interface BalancesProps {
  player?: string;
  house?: string;
  totalBetted?: string;
  totalLost?: string;
  allowance?: number | ethers.BigNumber;
}

interface BetProps {
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

interface CardProjectProps {
  projectName: string;
  description: string;
  technologiesUsed: string;
  keyFeatures: string;
  role: string;
  challenges: string;
  learnMore: string;
}

interface DisplayProps {
  inputs: InputsProps;
  results: ResultsProps;
  waitingBet: boolean;
}

interface HeroContextProps {
  balances: BalancesProps;
  inputs: InputsProps;
  results: ResultsProps;
  waitingBet: boolean;
  setIsOpenAlert: Dispatch<SetStateAction<AppAlertProps>>;
  setWaitingBet: React.Dispatch<React.SetStateAction<boolean>>;
  updateInputOutputs: (newInputOutputs: any) => void;
  fetchBalances: () => Promise<void>;
}

interface HouseDisplayProps {
  balances: BalancesProps;
}

interface InputsProps {
  guess?: number;
  hand?: number;
  amount?: number;
}

interface ResultsProps {
  playerHand?: number;
  playerGuess?: number;
  requestId?: string;
  taskId?: string;
  betId?: string;
  houseHand?: number;
  winner?: string;
}

interface ResultsDisplayProps {
  results: ResultsProps;
  waitingBet: boolean;
}

interface TabContent {
  label: string;
  component: React.ReactNode;
}

// interface HeroAnimationProps {
//   ConnectBar: FC;
//   FlyFlutter: FC;
//   Hands: FC;
//   balances: BalancesProps;
//   inputOutputs: InputOutputsProps;
//   updateBalances: (
//     newBalances: string | number | ethers.BigNumber | undefined
//   ) => void;
//   updateInputOutputs: (newinputOutputs: string | undefined) => void;
//   waitingBet: boolean;
//   setWaitingBet: (waiting: boolean) => void;
//   fetchBalances: () => void;
//   setIsOpenAlert: React.Dispatch<React.SetStateAction<AppAlertProps>>;
// }

// interface HeroProps {
//   title: string;
//   description: string;
//   imageUrl: string;
// }

// interface NumberInputProps {
//   value: number;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   placeholder?: string;
//   disabled?: boolean;
//   className?: string;
// }

// interface AmountSelectorProps {
//   value: number;
//   onChange: (value: number) => void;
// }

// interface CircularLoadingProps {
//   size?: number;
//   strokeWidth?: number;
//   color?: string;
//   className?: string;
// }

// type PlaceBetTxResult = {
//   success: boolean;
//   hash?: string;
//   message: string;
// };

// type PlaceBetTxProps = {
//   player: `0x${string}` | undefined;
//   betFee: number | ethers.BigNumber | undefined;
//   selectedHand: number;
//   selectedGuess: number;
//   selectedBetAmount: number;
// };

// interface CardProjectProps {
//   projectName: string;
//   description: string;
//   technologiesUsed: string;
//   keyFeatures: string;
//   role: string;
//   challenges: string;
//   learnMore: string;
//   isDarkCard?: boolean;
// }

// interface TabContent {
//   label: string;
//   component: React.ReactNode;
// }

// interface FlyFlutterTabsProps {
//   tabs: TabContent[];
//   height?: string;
// }
