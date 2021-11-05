import { Box, Typography, Tabs, Tab } from "@mui/material";
import React from "react";
import AnagramFinder from "./AnagramFinder";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="Tab">
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="crossword tools"
          textColor="primary">
          <Tab label="Anagrams" {...a11yProps(0)} />
          <Tab label="Odd/even clues" {...a11yProps(1)} />
          <Tab label="Grid aligner" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <Typography variant='h1'>Anagram finder</Typography>
          <AnagramFinder/>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <Typography variant='h1'>Coming soon</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <Typography variant='h1'>Coming soon</Typography>
      </TabPanel>
    </Box>
  );
}