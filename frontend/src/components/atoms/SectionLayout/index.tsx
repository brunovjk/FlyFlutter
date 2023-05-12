import { useState, useEffect, useRef } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

interface SectionProps {
  content1: React.ReactNode;
  content2?: React.ReactNode;
  disableFadeIn?: boolean;
}

const FadeInBox = styled(Box)({
  transition: "opacity 1.5s",
  opacity: 0,
  "&.fade-in": {
    opacity: 1,
  },
});

const ContentLayout: React.FC<SectionProps> = ({ content1, content2 }) => {
  return (
    <>
      {content2 ? (
        <Grid container>
          <Grid item xs={12} md={6} sx={{ width: "100%", zIndex: 2 }}>
            {content1}
          </Grid>
          <Grid item xs={12} md={6} sx={{ width: "100%", zIndex: 1 }}>
            {content2}
          </Grid>
        </Grid>
      ) : (
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12} sx={{ width: "100%", zIndex: 1 }}>
            {content1}
          </Grid>
        </Grid>
      )}
    </>
  );
};

const SectionLayout: React.FC<SectionProps> = ({
  content1,
  content2,
  disableFadeIn,
}) => {
  const [show, setShow] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {disableFadeIn ? (
        <ContentLayout content1={content1} content2={content2} />
      ) : (
        <FadeInBox
          ref={sectionRef}
          sx={{ width: "100%" }}
          className={show ? "fade-in" : ""}
        >
          <ContentLayout content1={content1} content2={content2} />
        </FadeInBox>
      )}
    </>
  );
};

export default SectionLayout;
