import { usePlayerFetchBalances, useFetchBalances } from "../../../hooks";
import { useAccount } from "wagmi";

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

  async function fetchOnlyPlayerBalances() {
    try {
      if (address != undefined) {
        await usePlayerFetchBalances(address, updateBalances);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async function fetchBalances() {
    try {
      if (address != undefined) {
        await useFetchBalances(address, updateBalances);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return {
    updateBalances,
    updateInputs,
    updateResults,
    fetchOnlyPlayerBalances,
    fetchBalances,
  };
}
