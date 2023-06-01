interface AppAlertProps {
  isOpen?: boolean;
  severity?: "info" | "success" | "warning" | "error";
  message?: string;
  link?: string;
}

interface BalancesProps {
  player?: number | ethers.BigNumber;
  house?: number | ethers.BigNumber;
  totalBetted?: number | ethers.BigNumber;
  totalLost?: number | ethers.BigNumber;
  allowance?: number | ethers.BigNumber;
  betFee?: number | ethers.BigNumber;
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
  keyFeatures?: string;
  learnMore: string;
  learnMoreLink: string;
}

interface DialogProps {
  open: boolean;
  title: string;
  body: JSX.Element;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: () => Promise<void>;
}

interface DisplayProps {
  inputs: InputsProps;
  results: ResultsProps;
  waitingBet: boolean;
}

type FlyFlutterContextProps = {
  balances: BalancesProps;
  inputs: InputsProps;
  results: ResultsProps;
  enabledMint: boolean;
  enabledApprove: boolean;
  enabledBet: boolean;
  placingBet: boolean;
  waitingBet: boolean;
  openAlert: AppAlertProps;
  setEnabledMint: React.Dispatch<React.SetStateAction<boolean>>;
  setEnabledApprove: React.Dispatch<React.SetStateAction<boolean>>;
  setEnabledBet: React.Dispatch<React.SetStateAction<boolean>>;
  setPlacingBet: React.Dispatch<React.SetStateAction<boolean>>;
  setWaitingBet: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenAlert: React.Dispatch<React.SetStateAction<AppAlertProps>>;
  updateBalances: (newBalancesValue: BalancesProps) => void;
  updateInputs: (newInputsValue: InputsProps) => void;
  updateResults: (newResultsValue: ResultsProps) => void;
  FetchOnlyPlayerBalances: () => Promise<void>;
  FetchBalances: () => Promise<void>;
};

interface HouseDisplayProps {
  balances: BalancesProps;
}

interface IconStackProps {
  color: string;
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

interface PlaceBetTxResult {
  success: boolean;
  hash?: string;
  message: string;
}

interface PlaceBetTxProps {
  player: `0x${string}` | undefined;
  betFee: number | ethers.BigNumber | undefined;
  selectedHand: number;
  selectedGuess: number;
  selectedBetAmount: number;
}

interface TabContent {
  label: string;
  component: React.ReactNode;
}
