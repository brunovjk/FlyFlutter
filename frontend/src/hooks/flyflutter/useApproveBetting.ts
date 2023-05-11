import { prepareWriteContract, writeContract } from "@wagmi/core";
import addresses from "@/contracts/addresses.json";
import FFC_ABI from "@/contracts/FlyFlutterCoin.json";

import { ethers } from "ethers";

const bettingAddress: any = addresses.bettingAddress;
const ffcAddress: any = addresses.ffcAddress;

export const useApproveBetting = async ({
  player,
  amount,
}: {
  player: `0x${string}` | undefined;
  amount: number | ethers.BigNumber;
}): Promise<{ success: boolean; hash?: string; message: string }> => {
  try {
    const config = await prepareWriteContract({
      address: ffcAddress,
      abi: FFC_ABI,
      functionName: "approve",
      args: [bettingAddress, amount],
      overrides: {
        from: player,
      },
    });

    const writeContractTx = await writeContract(config);
    const received = await writeContractTx.wait();

    if (received.status === 0) {
      return {
        success: false,
        hash: writeContractTx.hash,
        message: "Approve Betting failed",
      };
    }

    return {
      success: true,
      hash: writeContractTx.hash,
      message: "Approve Betting successful",
    };
  } catch (error: any) {
    console.log(error);
    return { success: false, hash: undefined, message: error.message };
  }
};
