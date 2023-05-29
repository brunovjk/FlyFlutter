import React from "react";
import { Typography, Link } from "@mui/material";

const Logo: React.FC = () => (
  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    <Link
      href="/"
      sx={{
        textDecoration: "none",
        color: "secondary.light",
        "&:hover": {
          color: "secondary.main",
        },
      }}
    >
      brunovjk
    </Link>
  </Typography>
);

export default Logo;
