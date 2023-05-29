import React from "react";
import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

interface FadeInProps {
  children: React.ReactNode;
}

const StyledBox = styled(Box)(() => ({
  opacity: 0,
  transition: "opacity 1s ease-in",
  "&.fade-in": {
    opacity: 1,
  },
}));

const FadeInBox: React.FC<FadeInProps> = ({ children }) => {
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
    <StyledBox ref={fadeInRef} className={show ? "fade-in" : ""}>
      {children}
    </StyledBox>
  );
};

export default FadeInBox;
