import React, { useContext } from "react";

import { FlyFlutterContext } from "../context";
import { ethers } from "ethers";
import { id } from "ethers/lib/utils.js";

import { useAccount } from "wagmi";

import {
  usePlaceBetTx,
  useHashExplorer,
  useBetIdExplorer,
  useWatchBettingEvent,
  useWaitForTransaction,
} from "../../../hooks";

export function usePlayFunctions(
  setOpenConfirmDialog: React.Dispatch<React.SetStateAction<boolean>>
) {
  let currentBetId: any;

  const { address } = useAccount();

  const {
    balances,
    inputs,
    setEnabledBet,
    setPlacingBet,
    setWaitingBet,
    setOpenAlert,
    updateInputs,
    updateResults,
    fetchBalances,
  } = useContext(FlyFlutterContext);

  async function handleResetStates() {
    setTimeout(() => {
      updateInputs({
        guess: undefined,
        hand: undefined,
        amount: undefined,
      });

      updateResults({
        playerGuess: undefined,
        playerHand: undefined,
        requestId: undefined,
        taskId: undefined,
        betId: undefined,
        houseHand: undefined,
        winner: undefined,
      });

      setWaitingBet(false);
      setPlacingBet(false);
      setEnabledBet(false);

      setOpenConfirmDialog(false);
    }, 2000);
  }

  async function handleSetWinner(TaskExecutedEvent: any) {
    if (
      TaskExecutedEvent.owner.topics[0] ===
        id("TaskExecuted(bytes32,string)") &&
      TaskExecutedEvent.owner.topics[1] === currentBetId
    ) {
      if (TaskExecutedEvent.owner.topics[2] === id("Player wins")) {
        console.log("Task Executed, Winner: ", "Player wins");

        updateResults({
          winner: "Player wins",
        });
      } else if (TaskExecutedEvent.owner.topics[2] === id("House wins")) {
        console.log("Task Executed, Winner: ", "House wins");
        updateResults({
          winner: "House wins",
        });
      }
    } else {
      console.log("TaskExecutedEvent not found: ", TaskExecutedEvent);

      updateResults({
        winner: "Ups... Check History",
      });
      setOpenAlert({
        severity: "warning",
        message: "Erro to fetch Winner, Check at the explorer:",
        link: `${(await useBetIdExplorer()).data}`,
        isOpen: true,
      });
    }
  }

  async function handleSetHousehand(ReceivedUint256Event: any) {
    if (
      ReceivedUint256Event.owner.topics[0] ===
        id("ReceivedUint256(bytes32,uint8)") &&
      ReceivedUint256Event.owner.topics[1] === currentBetId
    ) {
      console.log(
        "QRNG Received, House hand: ",
        ethers.BigNumber.from(ReceivedUint256Event.owner.topics[2]).toString()
      );

      updateResults({
        houseHand: ethers.BigNumber.from(
          ReceivedUint256Event.owner.topics[2]
        ).toNumber(),
      });
    } else {
      console.log("ReceivedUint256Event not found: ", ReceivedUint256Event);
      updateResults({
        houseHand: undefined,
      });

      setOpenAlert({
        severity: "warning",
        message: "Erro to fetch Winner, Check at the explorer:",
        link: `${(await useBetIdExplorer()).data}`,
        isOpen: true,
      });
    }
  }

  async function handleSetBetResult([
    ReceivedUint256Event,
    TaskExecutedEvent,
  ]: any[]) {
    await handleSetHousehand(ReceivedUint256Event);
    await handleSetWinner(TaskExecutedEvent);
    await fetchBalances();
    setWaitingBet(false);
  }

  async function handleWatchEvents() {
    const ReceivedUint256Event = await useWatchBettingEvent({
      eventName: "ReceivedUint256",
    });
    const TaskExecutedEvent = await useWatchBettingEvent({
      eventName: "TaskExecuted",
    });
    return [ReceivedUint256Event, TaskExecutedEvent];
  }

  async function handleSetIds(transaction: any) {
    const logs = transaction.data.logs;
    for (let i = 0; i < logs.length; i++) {
      const element = logs[i];

      if (element.topics[0] === id("RequestedUint256(bytes32)")) {
        console.log("QRNG Requested, RequestId: ", element.topics[1]);
        updateResults({
          requestId: element.topics[1],
        });
      }
      if (element.topics[0] === id("TaskCreated(bytes32)")) {
        console.log("Task Created, TaskId: ", element.topics[1]);
        updateResults({
          taskId: element.topics[1],
        });
      }
      if (
        element.topics[0] === id("BetPlaced(bytes32,address,uint8,uint8,uint8)")
      ) {
        console.log("Bet Placed, BetId: ", element.topics[1]);
        currentBetId = element.topics[1];
        updateResults({
          betId: element.topics[1],
        });
      }
    }
  }

  async function handleBetTxSuccess(transaction: any) {
    // - Set RequestId, TaskId and BetId
    await handleSetIds(transaction);
    // - Watch event Received(requestId) and event TaskExecuted(requestId)
    console.log("Watch events...");
    const [ReceivedUint256Event, TaskExecutedEvent] = await handleWatchEvents();
    // - Set HouseHand and Winner
    console.log("Setting Winners...");
    await handleSetBetResult([ReceivedUint256Event, TaskExecutedEvent]);
  }

  async function handleBetTx(
    placeBetTx: any,
    playerHand: any,
    playerGuess: any
  ) {
    // Wait Transaction result
    const transaction: any = await useWaitForTransaction({
      hash: placeBetTx.hash,
    });
    // if Success
    if (transaction.data.status != 0) {
      // - open events component and tell the user can close/reload the page
      setOpenAlert({
        severity: "success",
        message: "Bet placed successful, you can close this page.",
        link: `${(await useHashExplorer({ hash: placeBetTx.hash })).data}`,
        isOpen: true,
      });

      updateInputs({
        guess: undefined,
        hand: undefined,
        amount: undefined,
      });

      updateResults({
        playerHand: playerHand,
        playerGuess: playerGuess,
      });

      setWaitingBet(true);

      setPlacingBet(false);
      await fetchBalances();
      await handleBetTxSuccess(transaction);
    } else {
      // if failed, alert failed
      console.log(
        "Transaction failed, please try again:",
        (await useHashExplorer({ hash: placeBetTx.hash })).data
      );
      setOpenAlert({
        severity: "info",
        message: "Transaction failed, please try again.",
        link: `${(await useHashExplorer({ hash: placeBetTx.hash })).data}`,
        isOpen: true,
      });
      await fetchBalances();
      handleResetStates();
    }
  }

  async function handlePlaceBet() {
    try {
      let playerHand = inputs.hand;
      let playerGuess = inputs.guess;
      let betFee = balances.betFee;
      let betAmount = inputs.amount;
      if (
        address != undefined &&
        betFee != undefined &&
        playerHand != undefined &&
        playerGuess != undefined &&
        betAmount != undefined
      ) {
        console.log("Placing Bet...");
        updateResults({
          playerHand: undefined,
          playerGuess: undefined,
          requestId: undefined,
          taskId: undefined,
          betId: undefined,
          houseHand: undefined,
          winner: undefined,
        });
        setWaitingBet(false);
        setPlacingBet(true);
        const placeBetTx = await usePlaceBetTx({
          player: address,
          betFee: betFee,
          selectedHand: playerHand,
          selectedGuess: playerGuess,
          selectedBetAmount: betAmount,
        });

        if (placeBetTx.success && placeBetTx.hash != undefined) {
          // Alert user Transaction was sent
          console.log(
            "Transaction sent, please wait confirmation:",
            (await useHashExplorer({ hash: placeBetTx.hash })).data
          );
          setOpenAlert({
            severity: "info",
            message: "Transaction sent, please wait confirmation.",
            link: (await useHashExplorer({ hash: placeBetTx.hash })).data,
            isOpen: true,
          });

          await handleBetTx(placeBetTx, playerHand, playerGuess);
        } else {
          console.log("Transaction not sent, please try again");
          handleResetStates();
          setOpenAlert({
            severity: "warning",
            message: "Transaction not sent, please try again",
            isOpen: true,
          });
        }
      }
    } catch (error: any) {
      console.log(error);
      handleResetStates();
      setOpenAlert({
        severity: "error",
        message: error.message,
        isOpen: true,
      });
    }
  }

  async function handleConfirmBet() {
    if (
      address &&
      inputs.guess !== undefined &&
      inputs.hand !== undefined &&
      inputs.amount !== undefined &&
      balances.betFee != undefined
    ) {
      setOpenConfirmDialog(true);
    }
  }

  return {
    handleResetStates,
    handleSetWinner,
    handleSetHousehand,
    handleSetBetResult,
    handleWatchEvents,
    handleSetIds,
    handleBetTxSuccess,
    handleBetTx,
    handlePlaceBet,
    handleConfirmBet,
  };
}
