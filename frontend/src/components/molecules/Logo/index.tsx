import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import { CustomLink } from "@/components/atoms";

const Logo: FC = () => (
  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    <CustomLink href="/">brunovjk</CustomLink>
  </Typography>
);

export default Logo;
