import React from "react";
import { ConnectKitButton } from "connectkit";
import LoadingButton from "@mui/lab/LoadingButton";
import theme from "../config/theme";

const ConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, truncatedAddress }) => {
        return (
          <LoadingButton
            variant="contained"
            sx={{
              width: "148px",
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.secondary.main,
            }}
            onClick={show}
            loading={isConnecting}
          >
            {!isConnecting && !isConnected
              ? "Connect"
              : truncatedAddress?.toString()}
          </LoadingButton>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default ConnectButton;
