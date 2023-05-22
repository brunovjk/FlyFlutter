import React from "react";
import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

interface FadeInProps {
  children: React.ReactNode;
}

const FadeInBox = styled(Box)({
  transition: "opacity 1.5s",
  opacity: 0,
  "&.fade-in": {
    opacity: 1,
  },
});

const FadeInLayout: React.FC<FadeInProps> = ({ children, ...props }) => {
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
    <FadeInBox
      ref={fadeInRef}
      sx={{ width: "100%" }}
      className={show ? "fade-in" : ""}
      {...props}
    >
      {children}
    </FadeInBox>
  );
};

export default FadeInLayout;
