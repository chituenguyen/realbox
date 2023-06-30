/* eslint-disable react/prop-types */
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import Funding from "./Funding/Funding";
import Rental from "./Rental/Rental";
import Ended from "./Ended/Ended";

function TabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const Invest = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Funding" />
            <Tab label="Rental period" />
            <Tab label="Ended" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Funding />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Rental />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Ended />
        </TabPanel>
      </Box>
    </div>
  );
};

export default Invest;
