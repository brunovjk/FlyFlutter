import { readContract } from "@wagmi/core";
import addresses from "../../contracts/addresses.json";
import FFC_ABI from "../../contracts/FlyFlutterCoin.json";
import { BigNumber } from "ethers";

const bettingAddress: any = addresses.bettingAddress;
const ffcAddress: any = addresses.ffcAddress;

export async function useAllowanceBetting({
  checkAddress,
}: {
  checkAddress: `0x${string}` | undefined;
}): Promise<{
  success: boolean;
  data?: number | BigNumber;
  message: string;
}> {
  try {
    const data: any = await readContract({
      address: ffcAddress,
      abi: FFC_ABI,
      functionName: "allowance",
      args: [checkAddress, bettingAddress],
    });

    return {
      success: true,
      data: data,
      message: "Allowance Betting successful",
    };
  } catch (error: any) {
    return { success: false, data: undefined, message: error.message };
  }
}
