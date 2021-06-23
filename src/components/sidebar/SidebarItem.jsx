import React from "react";
import {
  
  ListItem,
  ListItemText,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import MyIconButton from "../buttons/MyIconButton";
const useStyles = makeStyles({
  sidebarItemListIcon: {},
  sidebarItemListText: {
    fontWeight: "400",
    fontSize: "15px",
    color: "#828282",
    lineHeight: "21.09px",
    letterSpacing: "0.2px",
  },
  sidebarItem: {
    cursor: "pointer",

    "&:hover": {
      background: "#E1D8F1",
    },
    "&:active": {
      background: "#E1D8F1",
      borderLeft: "5px solid #330B86",
    },
  },
});
const SidebarItem = (props) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.sidebarItem}>
      <ListItemIcon className={classes.sidebarItemListIcon}>
        <MyIconButton disabled>{props.icon}</MyIconButton>
      </ListItemIcon>
      <ListItemText>
        <span className={classes.sidebarItemListText}>{props.text}</span>
      </ListItemText>
    </ListItem>
  );
};

export default SidebarItem;
