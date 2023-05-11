import React, { FC } from "react";

import { useState, useEffect } from "react";

import { ConnectKitButton } from "connectkit";

import LoadingButton from "@mui/lab/LoadingButton";

import { ButtonProps, styled, Box } from "@mui/material";

interface ConnectCustomButtonProps extends ButtonProps {
  isLoading?: boolean;
  isConnected?: boolean;
}

const StyledButton = styled(LoadingButton)({
  textTransform: "none",
});

const ConnectCustomButton: FC<ConnectCustomButtonProps> = ({
  isLoading = false,
  isConnected = false,
  children,
  ...props
}) => {
  const initialStyle = {
    border: "1px solid",
    borderColor: "black",
    backgroundColor: "#fff",
    color: "#000",
  };
  const connectedStyle = {
    borderRadius: "15px",
    border: "4px solid",
    borderColor: "text.primary",
    backgroundColor: "#56BBF1",
    color: "#fff",
  };
  const [buttonStyle, setButtonStyle] = useState(
    isConnected ? connectedStyle : initialStyle
  );

  useEffect(() => {
    setButtonStyle(isConnected ? connectedStyle : initialStyle);
  }, [isConnected]);

  const handleMouseEnter = () => {
    setButtonStyle(isConnected ? initialStyle : connectedStyle);
  };

  const handleMouseLeave = () => {
    setButtonStyle(isConnected ? connectedStyle : initialStyle);
  };

  return (
    <StyledButton
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
      style={{
        paddingInline: "16px",
        transition: "all 0.3s ease-in-out",
        ...buttonStyle,
        ...(isLoading && { cursor: "progress" }),
      }}
      loading={isLoading}
    >
      {children}
    </StyledButton>
  );
};

const ConnectButton: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ConnectKitButton.Custom>
        {({ isConnecting, show, isConnected, truncatedAddress }) => {
          return (
            <ConnectCustomButton
              onClick={show}
              isLoading={isConnecting}
              isConnected={isConnected}
            >
              {!isConnecting && !isConnected
                ? "Connect"
                : truncatedAddress?.toString()}
            </ConnectCustomButton>
          );
        }}
      </ConnectKitButton.Custom>
    </Box>
  );
};

export default ConnectButton;
