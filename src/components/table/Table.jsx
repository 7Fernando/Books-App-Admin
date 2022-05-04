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




  Date(1601528702*1000).toLocaleString()

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
           {users?.map((row)=> (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.plan}</TableCell>
              <TableCell className="tableCell" >{Date(row.subInfo[0]?.currentEnd*1000).toLocaleString()}</TableCell>
              <TableCell className="tableCell" >{Date(row.subInfo[0]?.currentStart*1000).toLocaleString()}</TableCell> 
             
              <TableCell className="tableCell">
                <span >UsD {row.subInfo[0]?.total / 100}</span>
              </TableCell> 
            </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
