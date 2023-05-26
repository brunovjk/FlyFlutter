import React, { FC, ReactNode } from "react";
import { Container } from "@mui/material";

interface SectionContainerProps {
  justifyContent?: "flex-start" | "center" | "flex-end";
  children: ReactNode;
}

const SectionContainer: FC<SectionContainerProps> = ({
  justifyContent = "center",
  children,
  ...props
}) => {
  return (
    <Container
      maxWidth="lg"
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
