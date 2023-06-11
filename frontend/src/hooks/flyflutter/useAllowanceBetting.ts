import { readContract } from "@wagmi/core";
import addresses from "../../contracts/addresses.json";
import FFC_ABI from "../../contracts/FlyFlutterCoin.json";
import { BigNumber } from "ethers";

export async function useAllowanceBetting({
  checkAddress,
  chainId,
}: {
  checkAddress: `0x${string}` | undefined;
  chainId: number;
}): Promise<{
  success: boolean;
  data?: number | BigNumber;
  message: string;
}> {
  try {
    const ffcAddress: any =
      chainId === 137
        ? addresses.ffcAddress_polygon
        : addresses.ffcAddress_mumbai;

    const bettingAddress: any =
      chainId === 137
        ? addresses.bettingAddress_polygon
        : addresses.bettingAddress_mumbai;

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
