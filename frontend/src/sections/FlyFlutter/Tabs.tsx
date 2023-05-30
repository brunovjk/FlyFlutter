import React, { FC, useState } from "react";
import { GlassPaper, TabPanel, TabsWrapper } from "../../components";
import { Stack, useTheme } from "@mui/material";

import Play from "./Play";
import Rules from "./Rules";
import History from "./History";

import { useTranslation } from "react-i18next";

const Tabs: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  const tabsContent: TabContent[] = [
    {
      label: `${t("tabs.playLabel")}`,
      component: <Play />,
    },
    {
      label: `${t("tabs.rulesLabel")}`,
      component: <Rules />,
    },
    {
      label: `${t("tabs.historyLabel")}`,
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
        sx={{
          height: "390px",
          minWidth: "100%",
          transition: "all 1s ease-in",
        }}
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
