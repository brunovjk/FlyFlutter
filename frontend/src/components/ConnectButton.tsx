import React from "react";
import { ConnectKitButton } from "connectkit";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box } from "@mui/material";

const ConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, truncatedAddress }) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
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
          </Box>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default ConnectButton;
