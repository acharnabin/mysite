import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BsPencil } from "react-icons/bs";
import MyIconButton from "../buttons/MyIconButton";
import { IoArrowBackOutline } from "react-icons/io5";
import AceessControlTab from "./AceessControlTab";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

  tab: {
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "center",
    marginBottom: "10px",
  },
  PermissionTab: {
    padding: "10px 20px",
  },
  title: {
    fontWeight: "600",
    color: "#673AB7",
    alignSelf: "center",
    justifySelf: "center",
  },
});

const PermissionTab2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.PermissionTab}>
      <div className={classes.tab}>
        <MyIconButton>
          <IoArrowBackOutline />
        </MyIconButton>
        <span className={classes.title}>Management Team</span>

        <MyIconButton>
          <BsPencil />
        </MyIconButton>
      </div>
      <div>
        <AceessControlTab />
      </div>
    </div>
  );
};

export default PermissionTab2;
