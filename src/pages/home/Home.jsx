import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useSelector } from "react-redux";
import Detail from "../bookDetail/Detail";

const Home = () => {
  const showSearchBook = useSelector((state) => state.books.showSearchBook);
  const books = useSelector((state) => state.books.searchBook);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div> */}
        {showSearchBook && books?.length > 0 && (
          <div className="single">
            <div className="singleContainer">
              <Detail bookDetails={books[0]} />
            </div>
          </div>
        )}
        <div className="charts">
          {/* <Featured /> */}
          <Chart title="Last 6 Months (Revenue)" aspect={4 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
