import React from "react";
import "./ListUsers.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableUsers from "../../components/tableUsers/tableUsers";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <TableUsers />
      </div>
    </div>
  );
};

export default List;
