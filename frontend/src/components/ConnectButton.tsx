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
            sx={{ maxWidth: "192px" }}
            onClick={show}
            loading={isConnecting}
          >
            <>
              {isConnecting
                ? " "
                : !isConnected
                ? "Connect"
                : truncatedAddress?.toString()}
            </>
          </LoadingButton>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default ConnectButton;
