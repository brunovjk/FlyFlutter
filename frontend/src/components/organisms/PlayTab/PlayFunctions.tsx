import React, { useState, useEffect } from "react";

import { ethers } from "ethers";
import { id } from "ethers/lib/utils.js";

import { useAccount } from "wagmi";

import {
  usePlaceBetTx,
  useHashExplorer,
  useBetIdExplorer,
  useWatchBettingEvent,
  useWaitForTransaction,
} from "@/hooks";

export function usePlayFunctions(state: any, context: any) {
  const { address } = useAccount();

  async function handleResetStates() {
    setTimeout(() => {
      context.updateInputs({
        guess: undefined,
        hand: undefined,
        amount: undefined,
      });

      context.updateResults({
        playerGuess: undefined,
        playerHand: undefined,
        requestId: undefined,
        taskId: undefined,
        betId: undefined,
        houseHand: undefined,
        winner: undefined,
      });

      context.setWaitingBet(false);

      state.setDisabledBet(true);
      state.setIsOpenDialog(false);

      state.setIsLoadingPlaceBet(false);
    }, 2000);
  }

  async function handleSetWinner(TaskExecutedEvent: any) {
    if (
      TaskExecutedEvent.owner.topics[0] ===
        id("TaskExecuted(bytes32,string)") &&
      TaskExecutedEvent.owner.topics[1] === state.currentBetId
    ) {
      if (TaskExecutedEvent.owner.topics[2] === id("Player wins")) {
        console.log("Task Executed, Winner: ", "Player wins");

        context.updateResults({
          winner: "Player wins",
        });
      } else if (TaskExecutedEvent.owner.topics[2] === id("House wins")) {
        console.log("Task Executed, Winner: ", "House wins");
        context.updateResults({
          winner: "House wins",
        });
      }
    } else {
      console.log("TaskExecutedEvent not found: ", TaskExecutedEvent);

      context.updateResults({
        winner: "Erro to fetch Winner",
      });
      context.setIsOpenAlert({
        severity: "warning",
        message: `Erro to fetch Winner, Copy your BetId and check at the explorer:  ${
          (await useBetIdExplorer()).data
        }`,
        isOpen: true,
      });
    }
  }

  async function handleSetHousehand(ReceivedUint256Event: any) {
    if (
      ReceivedUint256Event.owner.topics[0] ===
        id("ReceivedUint256(bytes32,uint8)") &&
      ReceivedUint256Event.owner.topics[1] === state.currentBetId
    ) {
      console.log(
        "QRNG Received, House hand: ",
        ethers.BigNumber.from(ReceivedUint256Event.owner.topics[2]).toString()
      );

      context.updateResults({
        houseHand: ethers.BigNumber.from(
          ReceivedUint256Event.owner.topics[2]
        ).toNumber(),
      });
    } else {
      console.log("ReceivedUint256Event not found: ", ReceivedUint256Event);
      context.updateResults({
        houseHand: undefined,
      });

      context.setIsOpenAlert({
        severity: "warning",
        message: `Erro to fetch House Hand, Copy your BetId and check at the explorer: ${
          (await useBetIdExplorer()).data
        }`,
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
    await context.fetchBalances();
    context.setWaitingBet(false);
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
        context.updateResults({
          requestId: element.topics[1],
        });
      }
      if (element.topics[0] === id("TaskCreated(bytes32)")) {
        console.log("Task Created, TaskId: ", element.topics[1]);
        context.updateResults({
          taskId: element.topics[1],
        });
      }
      if (
        element.topics[0] === id("BetPlaced(bytes32,address,uint8,uint8,uint8)")
      ) {
        console.log("Bet Placed, BetId: ", element.topics[1]);
        state.currentBetId = element.topics[1];
        context.updateResults({
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
      context.setIsOpenAlert({
        severity: "success",
        message: `Bet placed successful, you can close this page: ${
          (await useHashExplorer({ hash: placeBetTx.hash })).data
        }`,
        isOpen: true,
      });

      context.updateInputs({
        guess: undefined,
        hand: undefined,
        amount: undefined,
      });

      context.updateResults({
        playerHand: playerHand,
        playerGuess: playerGuess,
      });

      context.setWaitingBet(true);

      state.setIsLoadingPlaceBet(false);
      await context.fetchBalances();
      await handleBetTxSuccess(transaction);
    } else {
      // if failed, alert failed
      console.log(
        "Transaction failed, please try again:",
        (await useHashExplorer({ hash: placeBetTx.hash })).data
      );
      context.setIsOpenAlert({
        severity: "info",
        message: `Transaction failed, please try again: ${
          (await useHashExplorer({ hash: placeBetTx.hash })).data
        }`,
        isOpen: true,
      });
      await context.fetchBalances();
      handleResetStates();
    }
  }

  async function handlePlaceBet() {
    try {
      let playerHand = context.inputs.hand;
      let playerGuess = context.inputs.guess;
      let betAmount = context.inputs.amount;

      console.log("Placing Bet...");
      context.updateResults({
        playerHand: undefined,
        playerGuess: undefined,
        requestId: undefined,
        taskId: undefined,
        betId: undefined,
        houseHand: undefined,
        winner: undefined,
      });
      context.setWaitingBet(false);
      state.setIsLoadingPlaceBet(true);
      const placeBetTx = await usePlaceBetTx({
        player: address,
        betFee: state.betFee.useFee,
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
        context.setIsOpenAlert({
          severity: "info",
          message: `Transaction sent, please wait confirmation: ${
            (await useHashExplorer({ hash: placeBetTx.hash })).data
          }`,
          isOpen: true,
        });

        await handleBetTx(placeBetTx, playerHand, playerGuess);
      } else {
        console.log("Transaction not sent, please try again");
        handleResetStates();
        context.setIsOpenAlert({
          severity: "warning",
          message: "Transaction not sent, please try again",
          isOpen: true,
        });
      }
    } catch (error: any) {
      console.log(error);
      handleResetStates();
      context.setIsOpenAlert({
        severity: "error",
        message: error.message,
        isOpen: true,
      });
    }
  }

  async function handleConfirmBet() {
    // context.fetchBalances;
    if (
      address &&
      context.inputs.guess !== undefined &&
      context.inputs.hand !== undefined &&
      context.inputs.amount !== undefined &&
      state.betFee.useFee != undefined
    ) {
      state.setIsOpenDialog(true);
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
