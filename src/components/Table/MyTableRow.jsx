
import {  TableHead } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TableRow from "@material-ui/core/TableRow";


const useStyles = makeStyles({
  tableHead: {
    background: "#F2F2F2",
  },
});

const MyTableRow = (props) => {
  const classes = useStyles();
  return (
    <TableHead className={classes.tableHead}>
      <TableRow className={classes.tableRow}>{props.children}</TableRow>
    </TableHead>
  );
};

export default MyTableRow;
