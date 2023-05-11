import React, { FC } from "react";
import { CustomLink } from "@/components/atoms";

const Links: FC = () => (
  <div>
    <CustomLink
      href="https://github.com/brunovjk/"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        ml: 4,
        fontSize: "1.125rem",
        fontWeight: "medium",
      }}
    >
      Github
    </CustomLink>
    <CustomLink
      href="https://discord.com/channels/@brunovjk#0416"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        ml: 4,
        fontSize: "1.125rem",
        fontWeight: "medium",
      }}
    >
      Discord
    </CustomLink>
    <CustomLink
      href="https://www.linkedin.com/in/brunovjk/"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        ml: 4,
        fontSize: "1.125rem",
        fontWeight: "medium",
      }}
    >
      Linkedin
    </CustomLink>
  </div>
);

export default Links;
