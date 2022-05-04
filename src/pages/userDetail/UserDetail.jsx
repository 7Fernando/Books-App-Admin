import React from "react";
import "./UserDetail.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

 import { useDispatch, useSelector } from "react-redux";
  import { getUserById} from "../../redux/actions/user";
  import { useEffect } from "react";
  import { useParams } from "react-router-dom";


const Single = () => {
  
    const dispatch = useDispatch();
    const id = useParams().userId;
    const user = useSelector((state) => state.user.userDetail);
   
    useEffect(() => {
      dispatch(getUserById(id));
    }, [dispatch,id]);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        {/* <Navbar /> */}
        <div className="top">
          <div className="left">
           
            <h1 className="title">Information User</h1>
            <div className="item">
              <img
                src={user.picture}
                alt="profile"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.mail}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">{user.role}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Favorites:</span>

                  <span className="itemValue">
                  {user.favorite ? user.favorite.map((b)=> "bookId: " + b.bookId + " ") : "No favorites"}
                  </span>

                </div>
                <div className="detailItem">
                  <span className="itemKey">Suscription :</span>

                  <span className="itemValue">
                  {user.plan? user.plan  : "No Suscription"}
                  </span>

                </div>
                
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Single;
