import { IconButton, Radio } from "@material-ui/core";
import React from "react";
import { IoAddSharp } from "react-icons/io5";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { AiOutlineEye } from "react-icons/ai";
import MyTableHead from "../Table/TableHead";
import AccesStatus from "../acessStatus/AccesStatus";
import MyButton from "../buttons/MyButton";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import MyIconButton from "../buttons/MyIconButton";

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
});

const PermissionTab1 = () => {
  const classes = useStyles();
  return (
    <div className={classes.PermissionTab}>
      <div className={classes.tab}>
        <MyButton text="Add Role" startIcon={<IoAddSharp />} />
        <MyIconButton>
          <BsPencil />
        </MyIconButton>
        <MyIconButton>
          <AiOutlineDelete />
        </MyIconButton>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <MyTableHead>
              <TableCell className={classes.tableCell}>
                Deparment/Role Name
              </TableCell>
              <TableCell align="center">Access Level</TableCell>
              <TableCell align="center">No of members</TableCell>
              <TableCell align="center">Last Updated</TableCell>
              <TableCell align="center"></TableCell>
            </MyTableHead>

            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Radio style={{ color: "#673AB7" }} />
                  Management Team
                </TableCell>
                <TableCell align="center">
                  <AccesStatus text="No Access" Disabled />
                </TableCell>
                <TableCell align="center">4</TableCell>
                <TableCell align="center">1 min ago</TableCell>
                <TableCell align="center">
                  <IconButton>
                    <AiOutlineEye />
                  </IconButton>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  <Radio style={{ color: "#673AB7" }} />
                  Management Team
                </TableCell>
                <TableCell align="center">
                  <AccesStatus text="Restricted Access" Restricted />
                </TableCell>
                <TableCell align="center">4</TableCell>
                <TableCell align="center">1 min ago</TableCell>
                <TableCell align="center">
                  <IconButton>
                    <AiOutlineEye />
                  </IconButton>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  <Radio style={{ color: "#673AB7" }} />
                  Management Team
                </TableCell>
                <TableCell align="center">
                  <AccesStatus text="Restricted Access" Restricted />
                </TableCell>
                <TableCell align="center">4</TableCell>
                <TableCell align="center">1 min ago</TableCell>
                <TableCell align="center">
                  <IconButton>
                    <AiOutlineEye />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Radio style={{ color: "#673AB7" }} />
                  Management Team
                </TableCell>
                <TableCell align="center">
                  <AccesStatus text="Restricted Access" Restricted />
                </TableCell>
                <TableCell align="center">4</TableCell>
                <TableCell align="center">1 min ago</TableCell>
                <TableCell align="center">
                  <IconButton>
                    <AiOutlineEye />
                  </IconButton>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  <Radio style={{ color: "#673AB7" }} />
                  Management Team
                </TableCell>
                <TableCell align="center">
                  <AccesStatus text="All Access" Active/>
                </TableCell>
                <TableCell align="center">4</TableCell>
                <TableCell align="center">1 min ago</TableCell>
                <TableCell align="center">
                  <IconButton>
                    <AiOutlineEye />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default PermissionTab1;
