import { Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  btn: {
    background: "#673AB7",
    color: "white",
    "&:hover": {
      background: "#673AB7",
    },
  },
});

const MyButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      disableRipple
      className={classes.btn}
      {...props}
    >
      {props.text}
    </Button>
  );
};

export default MyButton;
