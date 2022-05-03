import React from "react";
//import "./ListUsers.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import FormNewsletter from "../../components/FormNewsletter/FormNewsletter";
//import TableMails from "../../components/tableMails/tableMails";


const List = () => {

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
       
        <FormNewsletter />
      </div>
    </div>
  );
};

export default List;
