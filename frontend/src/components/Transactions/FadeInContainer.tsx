import React, { useState, useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material";

interface FadeInProps {
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  children: React.ReactNode;
}

const StyledContainer = styled(Container)(() => ({
  opacity: 0,
  transition: `opacity 1.9s ease-in`,
  "&.fade-in": {
    opacity: 1,
  },
}));

const FadeInContainer: React.FC<FadeInProps> = ({
  justifyContent = "center",
  children,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const fadeInRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 } // Intersection threshold - 30% visible
    );

    const currentRef = fadeInRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <StyledContainer
      ref={fadeInRef}
      maxWidth="lg"
      sx={{
        height: "100%",
        width: "100%",
        display: { xs: "grid", sm: "flex" },
        alignItems: "center",
        justifyContent: justifyContent,
      }}
      className={show ? "fade-in" : ""}
      {...props}
    >
      {children}
    </StyledContainer>
  );
};

export default FadeInContainer;
