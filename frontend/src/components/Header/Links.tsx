import React from "react";
import { Link } from "@mui/material";

const Links: React.FC = () => (
  <div>
    <Link
      href="https://github.com/brunovjk/"
      color="text.secondary"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        ml: 4,
        fontSize: "1.125rem",
        fontWeight: "medium",
        textDecoration: "none",
      }}
    >
      Github
    </Link>
    <Link
      href="https://discord.com/channels/@brunovjk#0416"
      color="text.secondary"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        ml: 4,
        fontSize: "1.125rem",
        fontWeight: "medium",
        textDecoration: "none",
      }}
    >
      Discord
    </Link>
    <Link
      href="https://www.linkedin.com/in/brunovjk/"
      color="text.secondary"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        ml: 4,
        fontSize: "1.125rem",
        fontWeight: "medium",
        textDecoration: "none",
      }}
    >
      Linkedin
    </Link>
  </div>
);

export default Links;
