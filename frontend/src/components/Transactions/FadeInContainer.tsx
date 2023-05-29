import React, { useState, useEffect, useRef } from "react";
import { Container, styled } from "@mui/material";

interface FadeInProps {
  justifyContent?: "flex-start" | "center" | "flex-end";
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

    if (fadeInRef.current) {
      observer.observe(fadeInRef.current);
    }

    return () => {
      if (fadeInRef.current) {
        observer.unobserve(fadeInRef.current);
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
        display: "flex",
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
