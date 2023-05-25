import React, { FC, useState } from "react";
import { GlassPaper, TabPanel, TabsWrapper } from "../../components";
import { Stack } from "@mui/material";
import theme from "../../config/theme";

import Play from "./Play";
import Rules from "./Rules";
import History from "./History";

const Tabs: FC = () => {
  const [value, setValue] = useState(0);

  const tabsContent: TabContent[] = [
    {
      label: "Play",
      component: <Play />,
    },
    {
      label: "Rules",
      component: <Rules />,
    },
    {
      label: "History",
      component: <History />,
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <GlassPaper>
        <TabsWrapper
          value={value}
          onChange={handleChange}
          theme={theme}
          tabs={tabsContent}
        />
      </GlassPaper>
      <GlassPaper
        sx={{ height: "390px", minWidth: { xs: "100%", md: "400px" } }}
      >
        {tabsContent.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            {tab.component}
          </TabPanel>
        ))}
      </GlassPaper>
    </Stack>
  );
};

export default Tabs;
