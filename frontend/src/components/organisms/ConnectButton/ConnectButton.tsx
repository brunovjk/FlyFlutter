import { CustomButton } from "@/components/atoms";
import { ConnectKitButton } from "connectkit";

const ConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, truncatedAddress }) => {
        return (
          <CustomButton
            sx={{ minWidth: "148px" }}
            onClick={show}
            loading={isConnecting}
          >
            {!isConnecting && !isConnected
              ? "Connect"
              : truncatedAddress?.toString()}
          </CustomButton>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default ConnectButton;
