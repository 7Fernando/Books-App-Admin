import React, { useEffect } from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from '../../redux/actions/user'



const List = () => {
 
  const users = useSelector((state)=> state.user.allUser)
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getUsers(users))
  },[dispatch])



  // const startDate = new Date(
  //   users.subInfo && users.subInfo[0].currentStart * 1000
  // );
  // const lastDate = new Date(users.subInfo && users.subInfo[0].currentEnd * 1000);
  // const total =
  //   (users.subInfo && users.subInfo[users.subInfo.length - 1].total) / 100;

  

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">User</TableCell>
            <TableCell className="tableCell">Plan</TableCell>
            <TableCell className="tableCell">Current End</TableCell>
            <TableCell className="tableCell">Current Start</TableCell>
            <TableCell className="tableCell">Total Pay</TableCell>
          </TableRow> 
        </TableHead>
        <TableBody>
           {users.map((row)=> (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.plan}</TableCell>
              <TableCell className="tableCell" >{row.subInfo[0].currentEnd}</TableCell>
              <TableCell className="tableCell" >{row.subInfo[0].currentStart}</TableCell> 
             
              <TableCell className="tableCell">
                <span className={`status ${users.status}`}>${row.subInfo[0].total}</span>
              </TableCell> 
            </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
