import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  tableHead: {
    background: "#F2F2F2",
  },
});

const MyTableHead = (props) => {
  const classes = useStyles();
  return (
    <TableHead className={classes.tableHead}>
      <TableRow className={classes.tableRow}>{props.children}</TableRow>
    </TableHead>
  );
};

export default MyTableHead;
