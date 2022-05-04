import { useState, useEffect } from "react";
import "./tableBooks.scss";
import { DataGrid } from "@mui/x-data-grid";
import { bookColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getBooksAdmin } from "../../redux/actions/books";
import { deleteBook } from "../../redux/actions/books";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Datatable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAdmin());
  }, [dispatch]);

  const allBooks = useSelector((state) => state.books.allBooks);

  const [data, setData] = useState(allBooks);
  const [open, setOpen] =useState(false)
  const [id, setId] = useState (0)

  useEffect(() => {
    setData(allBooks);
  }, [allBooks]);



  const handleClickOpen = (id) => {
    setOpen(true);
    setId(id)
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteBook(id))
    setData(data.filter((item) => item.id !== id));
    setOpen(false)
    console.log("que id borra", id)
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
            <Button  className="deleteButton" variant="outlined" onClick={()=> handleClickOpen(params.row.id)}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete Book
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          The record will be permanently deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Back</Button>
          <Button  onClick={() => handleDelete(id)} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
  
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
