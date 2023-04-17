import { fetchTransaction } from "@wagmi/core";

export const useFetchTransaction = async ({
  hash,
}: {
  hash: `0x${string}`;
}): Promise<{ success: boolean; data: any; message: string }> => {
  try {
    const transaction = await fetchTransaction({
      hash: hash,
    });

    return {
      success: true,
      data: transaction,
      message: "Fetch Transaction successful",
    };
  } catch (error: any) {
    return { success: false, data: undefined, message: error.message };
  }
};
