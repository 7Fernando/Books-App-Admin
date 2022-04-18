import React, { useState, useEffect } from "react";
import "./navbar.scss";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { searchBooks, showSearchBook } from "../../redux/actions/books";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.searchBook);

  useEffect(() => {
    books?.length > 0
      ? dispatch(showSearchBook(true))
      : dispatch(showSearchBook(false));
  }, [dispatch, books]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    if(search !== ''){
      e.preventDefault();
      dispatch(searchBooks(search));
      setSearch("");
    }else{
      alert("Please enter a book name");
    }
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <Input
            type="search"
            disableUnderline={true}
            value={search}
            onChange={handleChange}
            placeholder="Search Books..."
          />
          <Button onClick={onSubmit}>Search</Button>
        </div>
        <div className="items">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
