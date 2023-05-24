import React, { FC, useContext } from "react";
import { FlyFlutterContext } from "../context";
import { Stack } from "@mui/material";

import { ConnectButton, GlassPaperLargeShadow } from "../../../components";
import FFLogo from "./FFLogo";
import Mint from "./Mint";
import Approve from "./Approve";
import theme from "../../../config/theme";

const Header: FC = () => {
  const { balances, fetchOnlyPlayerBalances, setOpenAlert } =
    useContext(FlyFlutterContext);

  return (
    <GlassPaperLargeShadow
      sx={{
        paddingBlock: theme.spacing(2),
      }}
    >
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <FFLogo />

        <Mint
          balances={balances}
          fetchOnlyPlayerBalances={fetchOnlyPlayerBalances}
          setIsOpenAlert={setOpenAlert}
        />
        <Approve
          balances={balances}
          fetchOnlyPlayerBalances={fetchOnlyPlayerBalances}
          setIsOpenAlert={setOpenAlert}
        />
        <ConnectButton />
      </Stack>
    </GlassPaperLargeShadow>
  );
};

export default Header;
