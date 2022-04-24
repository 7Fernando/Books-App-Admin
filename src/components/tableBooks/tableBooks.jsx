import { useState, useEffect } from "react";
import "./tableBooks.scss";
import { DataGrid } from "@mui/x-data-grid";
import { bookColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getBooks } from "../../redux/actions/books";
<<<<<<< HEAD


=======
import { getUsers } from "../../redux/actions/user";
import { deleteBook } from "../../redux/actions/books";
>>>>>>> 4caf39092e01c7d2f56781ab1e023caf01772d02

const Datatable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const allBooks = useSelector((state) => state.books.allBooks);

  const [data, setData] = useState(allBooks);

  useEffect(() => {
    setData(allBooks);
  }, [allBooks]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    dispatch(deleteBook(id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/books/${params.row.id}`} style={{ textDecoration: "none" }}>
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
        List of Book
        <Link
          to="/books/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={bookColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable;
