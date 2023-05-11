import { getNetwork } from "@wagmi/core";
import addresses from "@/contracts/addresses.json";

const bettingAddress: any = addresses.bettingAddress;

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

export const useAddressExplorer = async ({
  address,
}: {
  address: string;
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
        url = `https://polygonscan.com/address/${address}`;
      } else if (chain.id == 80001) {
        url = `https://mumbai.polygonscan.com/address/${address}`;
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
      message: "Address successful",
    };
  } catch (error: any) {
    return { success: false, data: undefined, message: error.message };
  }
};

export const useBetIdExplorer = async (): Promise<{
  success: boolean;
  data: string | undefined;
  message: string;
}> => {
  try {
    const { chain }: any = getNetwork();
    let url: string;
    if (chain.id != undefined) {
      if (chain.id == 137) {
        url = `https://polygonscan.com/address/${bettingAddress}#readContract#F12`;
      } else if (chain.id == 80001) {
        url = `https://mumbai.polygonscan.com/address/${bettingAddress}#readContract#F12`;
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
      message: "Address successful",
    };
  } catch (error: any) {
    return { success: false, data: undefined, message: error.message };
  }
};
