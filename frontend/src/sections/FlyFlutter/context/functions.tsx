import { usePlayerFetchBalances, useFetchBalances } from "../../../hooks";
import { useAccount, useChainId } from "wagmi";

interface UseFunctionsProps {
  setBalances: React.Dispatch<React.SetStateAction<BalancesProps>>;
  setInputs: React.Dispatch<React.SetStateAction<InputsProps>>;
  setResults: React.Dispatch<React.SetStateAction<ResultsProps>>;
}

export function useFunctions({
  setBalances,
  setInputs,
  setResults,
}: UseFunctionsProps) {
  const { address } = useAccount();
  const chainId = useChainId();

  function updateBalances(newBalances: Partial<BalancesProps>) {
    setBalances((prevState: any) => ({
      ...prevState,
      ...newBalances,
    }));
  }

  function updateInputs(newInputs: Partial<InputsProps>) {
    setInputs((prevState: any) => ({
      ...prevState,
      ...newInputs,
    }));
  }
  function updateResults(newResults: Partial<ResultsProps>) {
    setResults((prevState: any) => ({
      ...prevState,
      ...newResults,
    }));
  }

  async function FetchOnlyPlayerBalances() {
    try {
      if (address != undefined) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        await usePlayerFetchBalances(address, updateBalances, chainId);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async function FetchBalances() {
    try {
      if (address != undefined) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        await useFetchBalances(address, updateBalances, chainId);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return {
    updateBalances,
    updateInputs,
    updateResults,
    FetchOnlyPlayerBalances,
    FetchBalances,
  };
}
