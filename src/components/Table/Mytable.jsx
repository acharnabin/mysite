import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Layout from "../layout/Layout";
import { Toolbar } from "@material-ui/core";

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



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    backgroundColor: "white",
    color: "black",
  },
}));

export default function MyTable() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar} elevation={0}>
          <Toolbar>
            <Tabs value={value} onChange={handleChange}>
                
            </Tabs>
            
          </Toolbar>
        </AppBar>
        <TabPanel value={value} index={0}>
          
        </TabPanel>
        <TabPanel value={value} index={1}>
          
        </TabPanel>
      </div>
    </Layout>
  );
}
