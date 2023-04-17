import { waitForTransaction } from "@wagmi/core";

export const useWaitForTransaction = async ({
  hash,
}: {
  hash: `0x${string}`;
}): Promise<{ success: boolean; data: any; message: string }> => {
  try {
    const transaction = await waitForTransaction({
      hash: hash,
    });

    return {
      success: true,
      data: transaction,
      message: "Wait For Transaction successful",
    };
  } catch (error: any) {
    return { success: false, data: undefined, message: error.message };
  }
};
