import { Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import { AiFillPropertySafety } from "react-icons/ai";
import MyCheckBox from "../buttons/MyCheckBox";
import MyRadioButton from "../buttons/MyRadioButton";

const LeftSideRows = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: "3px 0px",
      }}
    >
      <div style={{ marginTop: "0px" }}>
        <MyRadioButton />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="subtitle2" gutterBottom component="div">
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          style={{
            marginTop: "-10px",
            color: "gray",

            opacity: "0.8",
          }}
          gutterBottom
          component="div"
        >
          {props.subtitle}
        </Typography>
      </div>
    </div>
  );
};

const RightSideRows = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",

        alignItems: "center",
        margin: "3px 0px",
      }}
    >
      <MyCheckBox />
      <Typography
        variant="subtitle2"
        style={{ marginTop: "4px" }}
        gutterBottom
        component="div"
      >
        {props.title}
      </Typography>
    </div>
  );
};
const CollapsedRow = () => {
  return (
    <Grid container >
      <Grid item style={{padding:'10px 20px'}}>
        <Typography variant="subtitle2" gutterBottom component="div">
          Permission
        </Typography>
        <LeftSideRows title="All Access" subtitle="Can access all items" />
        <LeftSideRows
          title=" Restricted Access"
          subtitle="Can access only assigned or created items"
        />
      </Grid>
      <Divider
        orientation="horizontal"
        style={{ height: "34px", backgroundColor: "red" }}
        flexItem
      />
      <Grid item style={{padding:'10px 20px'}}>
        <Typography variant="subtitle2" gutterBottom component="div">
          Permission
        </Typography>

        <RightSideRows title="View items in access" />
        <RightSideRows title="Edit items in access" />
        <RightSideRows title="Create items in access" />
        <RightSideRows title="Delete items in access" />
      </Grid>
    </Grid>
  );
};

export default CollapsedRow;
