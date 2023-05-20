import { usePlayerFetchBalances, useFetchBalances } from "../../../hooks";
import { useAccount } from "wagmi";

export function useFunctions(state: any) {
  const { address } = useAccount();

  function updateBalances(newBalances: Partial<BalancesProps>) {
    state.setBalances((prevState: any) => ({
      ...prevState,
      ...newBalances,
    }));
  }

  function updateInputs(newInputs: Partial<InputsProps>) {
    state.setInputs((prevState: any) => ({
      ...prevState,
      ...newInputs,
    }));
  }
  function updateResults(newResults: Partial<ResultsProps>) {
    state.setResults((prevState: any) => ({
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
