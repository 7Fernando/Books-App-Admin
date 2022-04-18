import React from "react";
import "./ListBooks.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableBooks from "../../components/tableBooks/tableBooks";
import { useSelector } from "react-redux";
import Detail from "../bookDetail/Detail";

const List = () => {
  const showSearchBook = useSelector((state) => state.books.showSearchBook);
  const books = useSelector((state) => state.books.searchBook);
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {showSearchBook && books?.length > 0 && (
          <div className="single">
            <div className="singleContainer">
              <Detail bookDetails={books[0]} />
            </div>
          </div>
        )}
        <TableBooks />
      </div>
    </div>
  );
};

export default List;
