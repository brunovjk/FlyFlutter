import React, { FC } from "react";

import { CustomPaper } from "@/components/atoms";
import { useConnectionSync, useIsUpScreen } from "@/hooks";
import { Grid } from "@mui/material";

import { FFCMintProps } from "@/components/organisms/FFCMint";
import { FFCApproveProps } from "@/components/organisms/FFCApprove";

interface HeaderAnimationProps {
  FFCLogo: FC;
  FFCCopy: FC;
  FFCMint: FC<FFCMintProps>;
  FFCApprove: FC<FFCApproveProps>;
  ConnectButton: FC;
  balances: BalancesProps;
  fetchOnlyPlayerBalances: () => void;
  setIsOpenAlert: React.Dispatch<React.SetStateAction<AppAlertProps>>;
}

const HeaderAnimation: FC<HeaderAnimationProps> = ({
  FFCLogo,
  FFCCopy,
  FFCMint,
  FFCApprove,
  ConnectButton,
  balances,
  fetchOnlyPlayerBalances,
  setIsOpenAlert,
}) => {
  const isConnected = useConnectionSync();

  return (
    <CustomPaper>
      <Grid
        container
        direction={!isConnected ? "column" : "row"}
        justifyContent="space-evenly"
        alignItems="center"
        padding={{ xs: 1, md: 2 }}
        spacing={{ xs: 2, md: 4 }}
      >
        <Grid item>
          <FFCLogo />
        </Grid>
        {!isConnected && (
          <Grid item>
            <FFCCopy />
          </Grid>
        )}
        {isConnected && (
          <Grid item>
            <FFCMint
              balances={balances}
              fetchOnlyPlayerBalances={fetchOnlyPlayerBalances}
              setIsOpenAlert={setIsOpenAlert}
            />
          </Grid>
        )}
        {isConnected && (
          <Grid item>
            <FFCApprove
              balances={balances}
              fetchOnlyPlayerBalances={fetchOnlyPlayerBalances}
              setIsOpenAlert={setIsOpenAlert}
            />
          </Grid>
        )}
        <Grid item>
          <ConnectButton />
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default HeaderAnimation;
