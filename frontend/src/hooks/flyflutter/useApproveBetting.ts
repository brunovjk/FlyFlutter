import { prepareWriteContract, writeContract } from "@wagmi/core";
import addresses from "../../contracts/addresses.json";
import FFC_ABI from "../../contracts/FlyFlutterCoin.json";
import { ethers } from "ethers";

export const useApproveBetting = async ({
  player,
  amount,
  chainId,
}: {
  player: `0x${string}` | undefined;
  amount: number | ethers.BigNumber;
  chainId: number;
}): Promise<{ success: boolean; hash?: string; message: string }> => {
  try {
    const ffcAddress: any =
      chainId === 137
        ? addresses.ffcAddress_polygon
        : addresses.ffcAddress_mumbai;

    const bettingAddress: any =
      chainId === 137
        ? addresses.bettingAddress_polygon
        : addresses.bettingAddress_mumbai;

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
