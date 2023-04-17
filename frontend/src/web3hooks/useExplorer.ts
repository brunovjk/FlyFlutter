import { getNetwork } from "@wagmi/core";

export const useHashExplorer = async ({
  hash,
}: {
  hash: string;
}): Promise<{
  success: boolean;
  data: string | undefined;
  message: string;
}> => {
  try {
    const { chain }: any = getNetwork();
    let url: string;
    if (chain.id != undefined) {
      if (chain.id == 137) {
        url = `https://polygonscan.com/tx/${hash}`;
      } else if (chain.id == 80001) {
        url = `https://mumbai.polygonscan.com/tx/${hash}`;
      } else {
        return {
          success: false,
          data: undefined,
          message: "Unsupported chain",
        };
      }
    } else {
      return {
        success: false,
        data: undefined,
        message: "Failed to get chain ID",
      };
    }

    return {
      success: true,
      data: url,
      message: "Hash successful",
    };
  } catch (error: any) {
    return { success: false, data: undefined, message: error.message };
  }
};
