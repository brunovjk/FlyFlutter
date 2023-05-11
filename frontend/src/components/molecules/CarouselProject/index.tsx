import { IconButton, Stack } from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { CardProject } from "@/components/molecules";
import { useConnectionSync, useIsDownScreen } from "@/hooks";
import { CardProjectProps } from "../CardProject";

const CarouselProject: React.FC<{ projects: CardProjectProps[] }> = ({
  projects,
}) => {
  const isConnected = useConnectionSync();
  const isSmallScreen = useIsDownScreen("sm");
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: "20px", md: "16px", lg: "32px", xl: "64px" }}
      marginTop={{ xs: "-32px", md: "-64px", lg: "-96px" }}
    >
      <IconButton>
        {isSmallScreen ? (
          <KeyboardArrowUpIcon color={isConnected ? "primary" : "disabled"} />
        ) : (
          <KeyboardArrowLeftIcon color={isConnected ? "primary" : "disabled"} />
        )}
      </IconButton>
      {projects.slice(0, 3).map((project, index) => (
        <CardProject key={index} {...project} />
      ))}
      <IconButton>
        {isSmallScreen ? (
          <KeyboardArrowDownIcon color={isConnected ? "primary" : "disabled"} />
        ) : (
          <KeyboardArrowRightIcon
            color={isConnected ? "primary" : "disabled"}
          />
        )}
      </IconButton>
    </Stack>
  );
};

export default CarouselProject;
