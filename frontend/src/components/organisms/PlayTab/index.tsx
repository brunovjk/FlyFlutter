import React, { FC, ReactNode, useContext, useEffect } from "react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";

import { HeroContext } from "@/sections/Hero/HeroContext";
import { Grid, Divider, Stack } from "@mui/material";
import {
  CustomButton,
  CustomPaper,
  CustomTooltip,
  CustomTypography,
} from "@/components/atoms";
import { ConfirmDialog } from "@/components/molecules";
import {
  BetAmountSelector,
  GuessSelector,
  HandSelector,
} from "@/components/organisms";

import { usePlayState } from "./PlayStates";
import { usePlayFunctions } from "./PlayFunctions";
import { useBetFee } from "@/hooks";
import { MaticIcon } from "@/assets/icons";
import ConfirmBetDetails from "./ConfirmBetDetails";

const PlayTab: FC = () => {
  const { address, isConnected } = useAccount();

  const context = useContext(HeroContext);
  const state = usePlayState();
  const functions = usePlayFunctions(state, context);
  const {
    betFee,
    setBetFee,
    disabledBet,
    setDisabledBet,
    isOpenDialog,
    setIsOpenDialog,
    isLoadingPlaceBet,
  } = state;
  const { handlePlaceBet, handleConfirmBet } = functions;

  useEffect(() => {
    if (
      isConnected &&
      betFee != undefined &&
      context.inputs.guess !== undefined &&
      context.inputs.hand !== undefined &&
      context.inputs.amount !== undefined &&
      context.balances.allowance != undefined &&
      context.balances.player != undefined &&
      ethers.BigNumber.from(context.balances.allowance).gt(0) &&
      ethers.BigNumber.from(context.balances.player).gt(0)
    ) {
      setDisabledBet(false);
    } else {
      setDisabledBet(true);
    }
    return undefined;
  }, [
    isConnected,
    context.inputs.hand,
    context.inputs.guess,
    context.inputs.amount,
  ]);

  useEffect(() => {
    const getBetFee = async () => {
      try {
        const betFeeTX = await useBetFee();
        if (betFeeTX.success) {
          setBetFee({
            useFee: betFeeTX?.data?.useFee,
            showFee: betFeeTX?.data?.showFee,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (isConnected && address != undefined) {
      getBetFee();
    }

    return undefined;
  }, [isConnected, address]);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        {/* Guess */}
        <Grid item>
          <GuessSelector
            value={
              context.inputs.guess != undefined ? context.inputs.guess : ""
            }
            onChange={(newValue: number) =>
              context.updateInputs({ guess: newValue })
            }
          />
        </Grid>
        {/* Hand */}
        <Grid item>
          <HandSelector
            value={context.inputs.hand != undefined ? context.inputs.hand : 6}
            onChange={(event: any, newValue: number) =>
              context.updateInputs({ hand: newValue })
            }
          />
        </Grid>
        {/* Amount */}
        <Grid item>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <CustomTypography variant="caption">Bet Fee:</CustomTypography>
              <CustomTooltip title="This Matic Fee is used to cover the costs of the tools used to ensure the game is fair and secure, including the random number generator and automation services.">
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <CustomTypography variant="h6">
                    {betFee.showFee != undefined ? betFee.showFee : "--"}
                  </CustomTypography>
                  <MaticIcon />
                </Stack>
              </CustomTooltip>
            </Stack>
            <BetAmountSelector
              value={
                context.inputs.amount != undefined ? context.inputs.amount : ""
              }
              onChange={(newValue: number) =>
                context.updateInputs({ amount: newValue })
              }
            />
          </Stack>
        </Grid>
        {/* Button */}
        <Grid item>
          <CustomTooltip
            title={
              disabledBet
                ? "You need to choose a Guess, a Hand and a Bet Amount to be able to Place Bets"
                : ""
            }
          >
            <Stack>
              <CustomButton
                fullWidth
                disabled={disabledBet}
                onClick={handleConfirmBet}
                loading={isLoadingPlaceBet}
                sx={{ minWidth: "224px" }}
              >
                Review and Place Bet
              </CustomButton>
            </Stack>
          </CustomTooltip>
        </Grid>
      </Grid>
      <ConfirmDialog
        open={isOpenDialog}
        title="Confirm Bet"
        body={<ConfirmBetDetails context={context} betFee={betFee} />}
        setOpenDialog={setIsOpenDialog}
        onConfirm={handlePlaceBet}
        confirmText="Confirm"
        cancelText="Cancel"
      />
    </>
  );
};

export default PlayTab;
