import React from "react";
import { Typography, Link } from "@mui/material";

const Logo: React.FC = () => (
  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    <Link href="/">brunovjk</Link>
  </Typography>
);

export default Logo;
