import React from "react";
import { ConnectKitButton } from "connectkit";
import LoadingButton from "@mui/lab/LoadingButton";

const ConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, truncatedAddress }) => {
        return (
          <LoadingButton
            sx={{ width: "100%", maxWidth: "192px" }}
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
