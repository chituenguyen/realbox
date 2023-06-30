/* eslint-disable react/prop-types */
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import "./style.scss";
import Token from "./Token/Token";
import Recent from "./Recent/Recent";
import Saved from "./Saved/Saved";

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
const Marketplace = () => {
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
            <Tab label="All token" />
            <Tab label="Recent" />
            <Tab label="Saved" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Token />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Recent />{" "}
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Saved />{" "}
        </TabPanel>
      </Box>
    </div>
  );
};

export default Marketplace;
