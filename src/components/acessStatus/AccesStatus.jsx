import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  accessStatusActive: {
    borderRadius: "20px",
    width: "160px",
    background: "rgba(39, 174, 96, 0.3)",
    padding: "10px 20px",
    border: "1px solid #27AE60",
    boxSizing: "border-box",
    color: "#27AE60",
  },
  accessStatusRestricted: {
    borderRadius: "20px",
    width: "160px",
    background: "rgba(255, 8, 8, 0.3)",
    padding: "10px 20px",
    border: "1px solid #FF0808",
    boxSizing: "border-box",
    color: "#FF0808",
  },
  accessStatusDisabled: {
    borderRadius: "20px",
    width: "160px",
    background: "#F2F2F2",
    padding: "10px 20px",
    border: "1px solid #BDBDBD",
    boxSizing: "border-box",
    color: "#BDBDBD",
  },
});

const AccesStatus = (props) => {
  const classes = useStyles();
  
  return (
    <span
      className={`${props.Active && classes.accessStatusActive} ${props.Restricted && classes.accessStatusRestricted} ${props.Disabled && classes.accessStatusDisabled}`}
    >
      {props.text}
    </span>
  );
};

export default AccesStatus;
