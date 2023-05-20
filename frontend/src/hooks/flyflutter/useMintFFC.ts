import { prepareWriteContract, writeContract } from "@wagmi/core";
import addresses from "../../contracts/addresses.json";
import FFC_ABI from "../../contracts/FlyFlutterCoin.json";

const ffcAddress: any = addresses.ffcAddress;

export const useMintFFC = async ({
  player,
}: {
  player: `0x${string}` | undefined;
}): Promise<{ success: boolean; hash?: string; message: string }> => {
  try {
    const config = await prepareWriteContract({
      address: ffcAddress,
      abi: FFC_ABI,
      functionName: "mint",
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
        message: "Transaction failed",
      };
    }

    return {
      success: true,
      hash: writeContractTx.hash,
      message: "Transaction successful",
    };
  } catch (error: any) {
    console.log(error);
    return { success: false, hash: undefined, message: error.message };
  }
};
