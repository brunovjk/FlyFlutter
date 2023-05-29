import React, { FC, useState, useContext, useEffect } from "react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { formatEther } from "ethers/lib/utils.js";
import { usePlayFunctions } from "./functions";
import { useBetFee } from "../../../hooks";
import { useTranslation } from "react-i18next";

import { FlyFlutterContext } from "../context";

import {
  Grid,
  Stack,
  Tooltip,
  Typography,
  SvgIcon,
  useTheme,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { ConfirmDialog } from "../../../components";

import ConfirmBetDetails from "./ConfirmBetDetails";
import BetAmountSelector from "./BetAmountSelector";
import GuessSelector from "./GuessSelector";
import HandSelector from "./HandSelector";

const MaticIcon: FC = () => {
  const theme = useTheme();
  return (
    <SvgIcon
      fontSize="small"
      sx={{ color: theme.palette.secondary.main }}
      titleAccess="Polygon Matic"
      viewBox="179.199 228.614 665.601 566.773"
    >
      <path d="M681.469 402.456C669.189 395.312 653.224 395.312 639.716 402.456L543.928 457.228L478.842 492.949L383.055 547.721C370.774 554.865 354.81 554.865 341.301 547.721L265.162 504.856C252.882 497.712 244.286 484.614 244.286 470.325V385.786C244.286 371.498 251.654 358.4 265.162 351.256L340.073 309.581C352.353 302.437 368.318 302.437 381.827 309.581L456.737 351.256C469.018 358.4 477.614 371.498 477.614 385.786V440.558L542.7 403.646V348.874C542.7 334.586 535.332 321.488 521.824 314.344L383.055 235.758C370.774 228.614 354.81 228.614 341.301 235.758L200.076 314.344C186.567 321.488 179.199 334.586 179.199 348.874V507.237C179.199 521.525 186.567 534.623 200.076 541.767L341.301 620.353C353.582 627.498 369.546 627.498 383.055 620.353L478.842 566.772L543.928 529.86L639.716 476.279C651.996 469.135 667.961 469.135 681.469 476.279L756.38 517.953C768.66 525.098 777.257 538.195 777.257 552.484V637.023C777.257 651.312 769.888 664.409 756.38 671.553L681.469 714.419C669.189 721.563 653.224 721.563 639.716 714.419L564.805 672.744C552.525 665.6 543.928 652.502 543.928 638.214V583.442L478.842 620.353V675.125C478.842 689.414 486.21 702.512 499.719 709.656L640.944 788.242C653.224 795.386 669.189 795.386 682.697 788.242L823.922 709.656C836.203 702.512 844.799 689.414 844.799 675.125V516.763C844.799 502.474 837.431 489.377 823.922 482.232L681.469 402.456Z"></path>
    </SvgIcon>
  );
};

const Play: FC = () => {
  const { t } = useTranslation();

  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);

  const { address, isConnected } = useAccount();
  const {
    balances,
    inputs,
    enabledBet,
    placingBet,
    setEnabledBet,
    updateBalances,
    updateInputs,
  } = useContext(FlyFlutterContext);

  const { handlePlaceBet, handleConfirmBet } =
    usePlayFunctions(setOpenConfirmDialog);

  useEffect(() => {
    if (
      isConnected &&
      balances.betFee != undefined &&
      inputs.guess !== undefined &&
      inputs.hand !== undefined &&
      inputs.amount !== undefined &&
      balances.allowance != undefined &&
      balances.player != undefined &&
      ethers.BigNumber.from(balances.allowance).gt(0) &&
      ethers.BigNumber.from(balances.player).gt(0)
    ) {
      setEnabledBet(true);
    } else {
      setEnabledBet(false);
    }
    return undefined;
  }, [isConnected, inputs?.hand, inputs?.guess, inputs?.amount]);

  useEffect(() => {
    const getBetFee = async () => {
      try {
        const betFeeTX = await useBetFee();
        if (betFeeTX.success) {
          updateBalances({ betFee: betFeeTX?.data });
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
            value={inputs.guess}
            onChange={(newValue: number) => updateInputs({ guess: newValue })}
          />
        </Grid>
        {/* Hand */}
        <Grid item>
          <HandSelector
            value={inputs.hand}
            onChange={(newValue: number) => updateInputs({ hand: newValue })}
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
              <Typography variant="caption">{t("betFee.caption")}</Typography>
              <Tooltip title={t("betFee.tooltip")}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Typography variant="h6">
                    {balances.betFee != undefined
                      ? formatEther(balances.betFee).toString()
                      : "--"}
                  </Typography>
                  <MaticIcon />
                </Stack>
              </Tooltip>
            </Stack>
            <BetAmountSelector
              value={inputs.amount}
              onChange={(newValue: number | undefined) =>
                updateInputs({ amount: newValue })
              }
            />
          </Stack>
        </Grid>
        {/* Button */}
        <Grid item>
          <Tooltip title={enabledBet ? "" : t("betButton.tooltip")}>
            <Stack>
              <LoadingButton
                fullWidth
                disabled={!enabledBet}
                onClick={handleConfirmBet}
                loading={placingBet}
                sx={{ minWidth: "224px" }}
              >
                {t("betButton.label")}
              </LoadingButton>
            </Stack>
          </Tooltip>
        </Grid>
      </Grid>
      <ConfirmDialog
        open={openConfirmDialog}
        title={t("confirmDialog.title")}
        body={<ConfirmBetDetails balances={balances} inputs={inputs} />}
        setOpenDialog={setOpenConfirmDialog}
        onConfirm={handlePlaceBet}
      />
    </>
  );
};

export default Play;
