import { ethers, BigNumber } from "ethers";
import {
  prepareSendTransaction,
  sendTransaction,
  getProvider,
  fetchSigner,
  signMessage,
  signTypedData,
} from "@wagmi/core";

import addresses from "../contracts/addresses.json";
import BETTING_ABI from "../contracts/Betting.json";
import FFC_ABI from "../contracts/FlyFlutterCoin.json";

const ffcAddress: any = addresses.ffcAddress;
const bettingAddress: any = addresses.bettingAddress;

const provider = getProvider();

// Get the FFC contract instance
const ffcContract = new ethers.Contract(ffcAddress, FFC_ABI, provider);

// Get the Betting contract instance
const bettingContract = new ethers.Contract(
  bettingAddress,
  BETTING_ABI,
  provider
);

const approvePermit = async ({
  player,
  selectedBetAmount,
}: {
  player: `0x${string}` | undefined;
  selectedBetAmount: number;
}): Promise<{ success: boolean }> => {
  const signer: any = await fetchSigner();
  const deadline = Math.floor(Date.now() / 1000) + 3600; // Expires in 1 hour
  const message = {
    owner: player,
    spender: bettingAddress,
    value: selectedBetAmount,
    deadline,
  };
  const { v, r, s }: any = await signMessage({
    message: ethers.utils.arrayify(
      ethers.utils.solidityKeccak256(
        ["bytes"],
        [ethers.utils.toUtf8Bytes(JSON.stringify(message))]
      )
    ),
  });
  /*** Debug Sign message *********************************/
  if (!v || !r || !s) {
    console.log("Invalid signature");
    return { success: false };
  }
  console.log("player", player);
  console.log("bettingAddress", bettingAddress);
  console.log("selectedBetAmount", selectedBetAmount);
  console.log("deadline", deadline);
  console.log("v", v);
  console.log("r", r);
  console.log("s", s);
  /********************************************************/
  const permitTx = await ffcContract
    .connect(signer)
    .permit(player, bettingAddress, selectedBetAmount, deadline, v, r, s);

  if (permitTx) {
    console.log("Permit approve successful:", permitTx);
    return {
      success: true,
    };
  }
  console.log("Permit approve failed");
  return {
    success: false,
  };
};

export const usePlaceBetTxPermit = async ({
  player,
  betFee,
  selectedHand,
  selectedGuess,
  selectedBetAmount,
}: {
  player: `0x${string}` | undefined;
  betFee: number | ethers.BigNumber | undefined;
  selectedHand: number;
  selectedGuess: number;
  selectedBetAmount: number;
}): Promise<{ success: boolean; hash?: string; message: string }> => {
  try {
    const successApprove = await approvePermit({
      player,
      selectedBetAmount,
    });
    if (successApprove) {
      console.log("successApprove:", successApprove);
    }
    // if (successApprove) {
    //   const config = await prepareSendTransaction({
    //     request: {
    //       to: bettingAddress,
    //       from: player,
    //       value: betFee,
    //       data: new ethers.utils.Interface(BETTING_ABI).encodeFunctionData(
    //         "placeBet",
    //         [selectedHand, selectedGuess, selectedBetAmount]
    //       ),
    //     },
    //   });

    //   const writeContractTx = await sendTransaction(config);

    //   // We need get the Bet.requestId from the `received`
    //   const received = await writeContractTx.wait();
    //   console.log("placeBet writeContractTx received:", received);

    //   if (received.status === 0) {
    //     return {
    //       success: false,
    //       hash: writeContractTx.hash,
    //       message: "Transaction failed",
    //     };
    //   }

    //   return {
    //     success: true,
    //     hash: writeContractTx.hash,
    //     message: "Transaction successful",
    //   };
    // }
    return {
      success: false,
      hash: undefined,
      message: "Transaction failed",
    };
  } catch (error: any) {
    console.log(error);
    return { success: false, hash: undefined, message: error.message };
  }
};
