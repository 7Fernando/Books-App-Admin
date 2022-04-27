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

  const [data, setData] = useState(allUser);

   useEffect(() => {
     setData(allUser);
   }, [allUser]);

   //console.log('mails list', data.map((m)=> m.mail))

  return (
    <div className="datatable">
      
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userMail}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;