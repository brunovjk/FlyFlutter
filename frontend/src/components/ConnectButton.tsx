import React from "react";
import { ConnectKitButton } from "connectkit";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTranslation } from "react-i18next";

const ConnectButton = () => {
  const { t } = useTranslation();

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
                ? `${t("connect")}`
                : truncatedAddress?.toString()}
            </>
          </LoadingButton>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default ConnectButton;
