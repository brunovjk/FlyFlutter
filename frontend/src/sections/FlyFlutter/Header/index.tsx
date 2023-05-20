import React, { FC, useContext } from "react";
import { FlyFlutterContext } from "../context";
import { Paper, Stack } from "@mui/material";

import { ConnectButton } from "../../../components";
import FFLogo from "./FFLogo";
import Mint from "./Mint";
import Approve from "./Approve";

const Header: FC = () => {
  const { balances, fetchOnlyPlayerBalances, setOpenAlert } =
    useContext(FlyFlutterContext);

  return (
    <Paper>
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
    </Paper>
  );
};

export default Header;
