import React, { FC, useContext } from "react";
import { FlyFlutterContext } from "../context";
import { Grid, useTheme } from "@mui/material";

import { ConnectButton, GlassPaperLargeShadow } from "../../../components";
import FFLogo from "./FFLogo";
import Mint from "./Mint";
import Approve from "./Approve";

const Header: FC = () => {
  const theme = useTheme();
  const { balances, fetchOnlyPlayerBalances, setOpenAlert } =
    useContext(FlyFlutterContext);

  return (
    <GlassPaperLargeShadow
      sx={{
        paddingBlock: theme.spacing(2),
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        spacing={2}
        paddingX={2}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          order={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FFLogo />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          order={{ xs: 2, md: 1 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Mint
            balances={balances}
            fetchOnlyPlayerBalances={fetchOnlyPlayerBalances}
            setIsOpenAlert={setOpenAlert}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          order={{ xs: 3, md: 2 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Approve
            balances={balances}
            fetchOnlyPlayerBalances={fetchOnlyPlayerBalances}
            setIsOpenAlert={setOpenAlert}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          order={{ xs: 1, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ConnectButton />
        </Grid>
      </Grid>
    </GlassPaperLargeShadow>
  );
};

export default Header;
