import React, { FC, useState } from "react";
import { CustomPaper } from "@/components/atoms";
import { TabPanel, TabsWrapper } from "@/components/molecules";
import { PlayTab, RulesTab, HistoryTab } from "@/components/organisms";
import { Stack, useTheme } from "@mui/material";

const HeroTab: FC = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const tabsContent: TabContent[] = [
    {
      label: "Play",
      component: <PlayTab />,
    },
    {
      label: "Rules",
      component: <RulesTab />,
    },
    {
      label: "History",
      component: <HistoryTab />,
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
      <CustomPaper>
        <TabsWrapper
          value={value}
          onChange={handleChange}
          theme={theme}
          tabs={tabsContent}
        />
      </CustomPaper>
      <CustomPaper sx={{ height: "390px", minWidth: "400px" }}>
        {tabsContent.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            {tab.component}
          </TabPanel>
        ))}
      </CustomPaper>
    </Stack>
  );
};

export default HeroTab;
