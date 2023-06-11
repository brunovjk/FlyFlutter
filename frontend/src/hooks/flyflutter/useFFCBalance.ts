import { readContract } from "@wagmi/core";
import addresses from "../../contracts/addresses.json";
import FFC_ABI from "../../contracts/FlyFlutterCoin.json";
import { BigNumber } from "ethers";

export const useFFCBalance = async ({
  checkAddress,
  chainId,
}: {
  checkAddress: string;
  chainId: number;
}): Promise<{
  success: boolean;
  data?: number | BigNumber;
  message: string;
}> => {
  try {
    const ffcAddress: any =
      chainId === 137
        ? addresses.ffcAddress_polygon
        : addresses.ffcAddress_mumbai;

    const data: any = await readContract({
      address: ffcAddress,
      abi: FFC_ABI,
      functionName: "balanceOf",
      args: [checkAddress],
    });

    return {
      success: true,
      data: data,
      message: "FFC Balance successful",
    };
  } catch (error: any) {
    return { success: false, data: undefined, message: error.message };
  }
};
