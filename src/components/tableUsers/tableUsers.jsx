import { useState, useEffect } from "react";
import "./tableUsers.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
 import { getUsers } from "../../redux/actions/user";

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


  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];






  return (
    <div className="datatable">
      <div className="datatableTitle">
      
        <Link
          to="/users/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
