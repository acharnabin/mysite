import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AccessTabInside from "./AccessTabInside";
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    color: "#673AB7",
    textTransform: "capitalize",
  },
}));

export default function AceessControlTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        elevation={0}
        style={{
          backgroundColor: "white",
          color: "#673AB7",
        }}
      >
        <Tabs
          value={value}
          className={classes.tab}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              background: "#673AB7",
              borderRadius: "30px 30px 0px 0px",
              height: "4px",
              color: "#673AB7",
            },
          }}
        >
          <Tab
            disableRipple
            className={classes.tab}
            classes={{ selected: `classes.tab` }}
            label="Access Control"
            {...a11yProps(0)}
          />
          <Tab
            disableRipple
            className={classes.tab}
            label="Assiged Members"
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AccessTabInside />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AccessTabInside />
      </TabPanel>
    </div>
  );
}
