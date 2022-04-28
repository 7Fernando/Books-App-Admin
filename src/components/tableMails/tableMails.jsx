import { useState, useEffect } from "react";
//import "./tableUsers.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userMail} from "../../datatablesource";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
 import {getUsers } from "../../redux/actions/user";

const Datatable = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
 }, [dispatch]);
  const allUser = useSelector((state) => state.user.allUser);
 //const [selection, setSelection] = use
  const [data, setData] = useState(allUser);
  const [select, setSelection] = useState([])
   useEffect(() => {
     setData(allUser);
   }, [allUser]);

  //  function handleSelect (e){
  //    e.preventDefault()
  //    dispatch(allUser.map((e)=> e.mail)
  //  }

  return (
    <div className="datatable">
      
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userMail}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        onSelectionChange={(newSelection) => {
          setSelection(newSelection.rows);
          console.log('seleccion',select.rows)
        }}
       
        
      />

    <h1>{select}</h1>
    </div>
  );
};

export default Datatable;