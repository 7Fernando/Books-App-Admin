import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ListBooks from "./pages/listBooks/ListBooks";
import ListUsers from "./pages/listUsers/ListUsers";
import UserDetail from "./pages/userDetail/UserDetail";
import BookDetail from "./pages/bookDetail/bookDetail";
import New from "./pages/new/New";
import ListMails from "./pages/listMails/listMails"
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DarkModeContext } from "./context/darkModeContext";
import Landing from "./pages/landing/Landing"
import "./theme/dark.scss";
import { useAuth0 } from '@auth0/auth0-react'
// import { getUserByMail } from './redux/actions/user'

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { user } =  useAuth0(); 
 
  const dispatch = useDispatch()
  const userRole = useSelector((state)=> state.user.userDetail)
  const [mail, setMail] = useState(null)

  // useEffect(()=>{
  //   setMail(user?.email)
  // }, [user])

  // useEffect(()=>{
  //  dispatch(getUserByMail(mail)) 
  // }, [mail])
  // console.log(userRole)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
          </Route>
          {/* {userRole?.role === "ADMIN" ? */}
            <>
              <Route path="/home" element={<Home />}/>
              <Route path="/users" element={<ListUsers />} />
              <Route path="/users/:userId" element={<UserDetail />} />
              <Route path="/books" element={<ListBooks />} />
              <Route path="/books/:bookId" element={<BookDetail />} />
              <Route path="/books/new" element={<New title="Add New Book" />}
              />
              <Route path="/newletter" element={<ListMails />} />
            </>
            {/* : <Route path="/home" element={<h1>no josecito!</h1>}></Route>} */}

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
