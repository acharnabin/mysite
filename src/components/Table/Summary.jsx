import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex'
  },
}));

export default function Summary(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems="center" justify="center" className={classes.root}>
      
        {props.items ? (
          props.items.map((item, index) => {
            return (
              <span style={{display:'flex'}}>
                <a href='#' style={{textDecoration:'none'}}>{item}</a>
                <Divider orientation="vertical" style={{height:'20px',backgroundColor:'black',margin:'1px 3px'}}/>
              </span>
            );
          })
        ) : (
          <p>--</p>
        )}
      </Grid>
    </div>
  );
}
