import { readContract } from "@wagmi/core";
import addresses from "../../contracts/addresses.json";
import FFC_ABI from "../../contracts/FlyFlutterCoin.json";

const ffcAddress: any = addresses.ffcAddress;

export const useFFCBalance = async ({
  checkAddress,
}: {
  checkAddress: string;
}): Promise<{
  success: boolean;
  data: string | undefined;
  message: string;
}> => {
  try {
    const data: any = await readContract({
      address: ffcAddress,
      abi: FFC_ABI,
      functionName: "balanceOf",
      args: [checkAddress],
    });

    return {
      success: true,
      data: { data }.data.toString(),
      message: "FFC Balance successful",
    };
  } catch (error: any) {
    return { success: false, data: undefined, message: error.message };
  }
};
