import React from "react";
import "./ListBooks.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableBooks from "../../components/tableBooks/tableBooks";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <TableBooks />
      </div>
    </div>
  );
};

export default List;
