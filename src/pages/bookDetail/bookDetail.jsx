import React, {useEffect} from "react";
import "./bookDetail.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import Detail from './Detail';
import { getBookDetails, clearState } from "../../redux/actions/books";
import { useDispatch, useSelector } from "react-redux";


const BookDetail = () => {
  const bookDetails = useSelector((state) => state.books.bookDetails);
  const dispatch = useDispatch();
  const id = useParams().bookId;

  useEffect(() => {
    return ()=>dispatch(clearState());
  },[dispatch]);

  useEffect(() => {
    dispatch(getBookDetails(id));
  }, [dispatch,id]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        {/* <Navbar /> */}
        <Detail bookDetails={bookDetails} id={id}/>
      </div>
    </div>
  );
};

export default BookDetail;
