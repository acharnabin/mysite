import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import MyTableHead from "../Table/TableHead";
import CollapsedRow from "../Table/CollapsedRow";
import AccesStatus from "../acessStatus/AccesStatus";
import MySwitch from "../buttons/MySwitch";
import Summary from "../Table/Summary";


const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  
});


function Row(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoRemoveCircleOutline /> : <IoAddCircleOutline />}
          </IconButton>
          {props.first}
        </TableCell>

        {props.children}
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box style={{ padding: "10px 20px" }}>
              <Typography variant="subtitle" gutterBottom component="div">
                All aspects in the bidding module
              </Typography>

              <CollapsedRow />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <MyTableHead>
          <TableCell>Deparment/Role Name</TableCell>
          <TableCell align="center">Access Level</TableCell>
          <TableCell align="center">Summary</TableCell>
          <TableCell align="center">Last Updated</TableCell>
          <TableCell align="center"></TableCell>
        </MyTableHead>

        <TableBody>
          <Row first="Budget">
            <TableCell align="center">
              <AccesStatus text="Restricted Access" Restricted />
            </TableCell>
            <TableCell align="center">
              <Summary />
            </TableCell>
            <TableCell align="center">1 min ago</TableCell>
            <TableCell align="center">
              <MySwitch />
            </TableCell>
          </Row>
          <Row first="Bidding">
            <TableCell align="center">
              <AccesStatus text="Restricted Access" Disabled />
            </TableCell>
            <TableCell align="center">
              <Summary items={["view", "create", "delete"]} />
            </TableCell>
            <TableCell align="center">1 min ago</TableCell>
            <TableCell align="center">
              <MySwitch />
            </TableCell>
          </Row>
          <Row first="Purchase Order/Work Order">
            <TableCell align="center">
              <AccesStatus text="Restricted Access" Active />
            </TableCell>
            <TableCell align="center">
              <Summary items={["view", "create", "delete"]} />
            </TableCell>
            <TableCell align="center">1 min ago</TableCell>
            <TableCell align="center">
              <MySwitch />
            </TableCell>
          </Row>
          <Row first="Organisational Profile">
            <TableCell align="center">
              <AccesStatus text="Restricted Access" Restricted />
            </TableCell>
            <TableCell align="center">
              <Summary items={["view", "create", "delete"]} />
            </TableCell>
            <TableCell align="center">1 min ago</TableCell>
            <TableCell align="center">
              <MySwitch />
            </TableCell>
          </Row>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
