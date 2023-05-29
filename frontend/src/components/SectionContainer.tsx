import React, { FC, ReactNode } from "react";
import { Breakpoint, Container } from "@mui/material";

interface SectionContainerProps {
  maxWidth?: false | Breakpoint;
  justifyContent?: "flex-start" | "center" | "flex-end";
  children: ReactNode;
}

const SectionContainer: FC<SectionContainerProps> = ({
  maxWidth = "lg",
  justifyContent = "center",
  children,
  ...props
}) => {
  return (
    <Container
      maxWidth={maxWidth}
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: justifyContent,
      }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default SectionContainer;
