import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Layout from "../layout/Layout";
import { FaWifi } from "react-icons/fa";
import { BsGrid3X2 } from "react-icons/bs";
import { Toolbar } from "@material-ui/core";
import { BiSync } from "react-icons/bi";
import PermissionTab from "../../components/tabs/PermissionTab";
import ApprovalMatrixTab from "../../components/tabs/ApprovalMatrixTab";

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
  appBar: {
    backgroundColor: "white",
    color: "black",
  },
  tab: {
    display: "flex",
    color: "#673AB7",
    textTransform: "capitalize",
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom:'1px solid gray',

  },
}));

export default function Screen2() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar} elevation={0}>
          <Toolbar className={classes.Toolbar}>
            <div>
              <Tabs
                value={value}
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
                  label="Permission"
                  className={classes.tab}
                  icon={<FaWifi />}
                  {...a11yProps(0)}
                />

                <Tab
                  disableRipple
                  className={classes.tab}
                  label="Approval Matrix"
                  icon={<BsGrid3X2 />}
                  {...a11yProps(1)}
                />
              </Tabs>
            </div>

            <div style={{ color: "gray" }}>
              <BiSync style={{ fontSize: "30px", margin: "4px 0px" }} />
              <span>Last synced 15 mins ago</span>
            </div>
          </Toolbar>
        </AppBar>
        <TabPanel value={value} index={0}>
          <PermissionTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ApprovalMatrixTab />
        </TabPanel>
      </div>
    </Layout>
  );
}
