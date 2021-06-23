import React from "react";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import {
  IoInformationCircle,
  IoNotificationsCircle,
  IoHome,
} from "react-icons/io5";
import SidebarItem from "../../components/sidebar/SidebarItem";
import { RiDashboardLine } from "react-icons/ri";
import { BiShieldQuarter } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";
import useStyles from "./LayoutStyles";

export default function Layout(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar className={classes.Toolbar}>
          <div className={classes.appbarRight}>
            <div className={classes.profile}>
              <Avatar />
              <span
                style={{ margin: "0px 4px", color: "black", fontWeight: "500" }}
              >
                nabin
              </span>
            </div>

            <IconButton>
              <IoNotificationsCircle style={{ fontSize: "30px" }} />
            </IconButton>

            <IconButton>
              <IoInformationCircle style={{ fontSize: "30px" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <IoHome className={classes.logoIcon} />
            </ListItemIcon>
            <ListItemText>
              <span className={classes.logoText}>MySite</span>
            </ListItemText>
          </ListItem>
          <SidebarItem text="Projects" icon={<RiDashboardLine />} />
          <SidebarItem text="Organisation Profile" icon={<BiShieldQuarter />} />
          <SidebarItem text="Access Control" icon={<HiOutlineBriefcase />} />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
