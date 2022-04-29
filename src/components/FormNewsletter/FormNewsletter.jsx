import { allUser } from '../../redux/reducers/user';
import React from 'react';
import { useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {mailUsers} from '../../redux/actions/user';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';



const FormNewsletter= () => {


const mail = useSelector((state)=> state.user.allUser.map((m) => m.mail))
const dispatch = useDispatch()
const [input, setInput] = useState({
        mail : '',
        message : ''
    })

    

    function handleSubmit(e){
      e.preventDefault();
      console.log(input)
      dispatch(mailUsers(input))
      alert('NewsLetter send')
      setInput({
         mail:'',
          message:''
      })
  }
    
    function handleChange(e){
      setInput({
          ...input,
          [e.target.name] : e.target.value
      })
     
      }



function handleCheck(e){
  if(e.target.checked){
      setInput({
          ...input,
           mail: [...input.mail, e.target.value]
           
      })
      
  }
  console.log('que agarro checks', e.target.value, [...input.mail])
}



  return (
    <div>
        <h1>Send Newsletter</h1>
        
            <form onSubmit={handleSubmit}>

            <TableContainer >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
             <TableRow >
             <TableCell align="left">   <input type='checkbox' name='mail' value={mail} onChange={(e)=>handleCheck(e)}  /> Send All User  </TableCell>
            </TableRow> 
            
            {mail?.map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               {/* <label> <input type='checkbox' name='mail' value={m} key={m.mail} onChange={(m)=>handleCheck(m)} /> {m} </label> */}
              
              
              <TableCell align="left"> <label> <input type='checkbox' name='mail' value={row} key={row.mail} onChange={(m)=>handleCheck(m)} /> {row} </label></TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>




                <div>
                 <h2>Your messege Here</h2> 
                
                <textarea type='text' name='message'  rows='10' cols='100'
                onChange={handleChange} 
                value={input.message}/>
                
                </div>

                 <div>
                
                <input  type="submit" value="Submit"
                disabled={
                  !input.message ||
                  !input.mail}/>
                </div> 

            </form>
        
    </div>
  );
};

export default FormNewsletter;
