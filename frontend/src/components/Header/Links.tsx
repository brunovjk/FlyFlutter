import React, { FC } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
import Link from "next/link";
import { IParallax } from "@react-spring/parallax";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import { useTranslation } from "react-i18next";

const NavLink = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.secondary.light}`,
  textDecoration: "none",
  textTransform: "uppercase",
  fontWeight: 500,
  display: "inline-block",
  transform: "translateY(8px)",
  width: useMediaQuery(theme.breakpoints.down("sm")) ? 45 : 90,
  transition: `all 0.2s ${theme.transitions.easing.easeInOut}`,
  "&:hover": {
    color: `${theme.palette.secondary.main}`,
  },
}));

const Dot = styled("div")(({ theme }) => ({
  width: 6,
  height: 6,
  background: `${theme.palette.secondary.main}`,
  borderRadius: "50%",
  transform: "translateX(40px) translateY(8px)",
  opacity: 0,
  transition: `all 0.2s ${theme.transitions.easing.easeInOut}`,
}));

const Links: FC<{ parallax: React.MutableRefObject<IParallax> }> = ({
  parallax,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();
  return (
    <Box sx={{ display: "grid", marginRight: { xs: 1, md: 2 } }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Link href="/about" style={{ textDecoration: "none" }}>
          <NavLink
            variant="button"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onMouseEnter={() => {
              const dot = document.getElementById("dot");
              if (dot) {
                dot.style.setProperty(
                  "transform",
                  "translateX(40px) translateY(8px)"
                );
                dot.style.setProperty("opacity", "1");
              }
            }}
            onMouseLeave={() => {
              const dot = document.getElementById("dot");
              if (dot) {
                dot.style.setProperty(
                  "transform",
                  "translateX(40px) translateY(8px)"
                );
                dot.style.setProperty("opacity", "0");
              }
            }}
          >
            {isSmallScreen ? (
              <AccountTreeOutlinedIcon />
            ) : (
              `${t("header.linkAbout")}`
            )}
          </NavLink>
        </Link>

        <NavLink
          variant="button"
          onClick={() => parallax.current.scrollTo(1.5)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onMouseEnter={() => {
            const dot = document.getElementById("dot");
            if (dot) {
              dot.style.setProperty(
                "transform",
                "translateX(150px) translateY(8px)"
              );
              dot.style.setProperty("opacity", "1");
            }
          }}
          onMouseLeave={() => {
            const dot = document.getElementById("dot");
            if (dot) {
              dot.style.setProperty(
                "transform",
                "translateX(150px) translateY(8px)"
              );
              dot.style.setProperty("opacity", "0");
            }
          }}
        >
          {isSmallScreen ? (
            <AccountTreeOutlinedIcon />
          ) : (
            `${t("header.linkProjects")}`
          )}
        </NavLink>
        <NavLink
          variant="button"
          onClick={() => parallax.current.scrollTo(3)}
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onMouseEnter={() => {
            const dot = document.getElementById("dot");
            if (dot) {
              dot.style.setProperty(
                "transform",
                "translateX(240px) translateY(8px)"
              );
              dot.style.setProperty("opacity", "1");
            }
          }}
          onMouseLeave={() => {
            const dot = document.getElementById("dot");
            if (dot) {
              dot.style.setProperty(
                "transform",
                "translateX(240px) translateY(8px)"
              );
              dot.style.setProperty("opacity", "0");
            }
          }}
        >
          {isSmallScreen ? (
            <ContactMailOutlinedIcon />
          ) : (
            `${t("header.linkContact")}`
          )}
        </NavLink>
      </Box>
      <Dot id="dot" />
    </Box>
  );
};

export default Links;
