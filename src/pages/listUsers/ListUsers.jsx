import React from "react";
import "./ListUsers.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableUsers from "../../components/tableUsers/tableUsers";

import { getUsers } from "../../redux/actions/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
