import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface TabsWrapperProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  theme: any;
  tabs: TabContent[];
}

export default function TabsWrapper({
  value,
  onChange,
  theme,
  tabs,
}: TabsWrapperProps) {
  return (
    <Tabs
      variant="fullWidth"
      value={value}
      onChange={onChange}
      aria-label="FluFlutter Game tab"
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
      sx={{
        "& .MuiTabs-indicator": {
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
        },
        "& .MuiTabs-indicatorSpan": {
          width: "60%",
          backgroundColor: theme.palette.primary.light,
        },
      }}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          sx={{ zIndex: 99 }}
          {...a11yProps(index)}
        />
      ))}
    </Tabs>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
