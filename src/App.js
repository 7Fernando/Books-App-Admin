import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ListBooks from "./pages/listBooks/ListBooks";
import ListUsers from "./pages/listUsers/ListUsers";
import UserDetail from "./pages/userDetail/UserDetail";
import BookDetail from "./pages/bookDetail/bookDetail";
import New from "./pages/new/New";
import ListMails from "./pages/listMails/listMails"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import "./theme/dark.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<ListUsers />} />
              <Route path=":userId" element={<UserDetail />} />
              {/* <Route path="new" element={<New inputs={userInputs} title="Add New User" />}
              /> */}
            </Route>
            <Route path="books">
              <Route index element={<ListBooks />} />
              <Route path=":bookId" element={<BookDetail />} />
              <Route path="new" element={<New  title="Add New Book" />}
              />
            </Route>
            <Route path="newletter">
               <Route index element={<ListMails />} /> 
             
              {/* <Route path="new" element={<New  title="Add New Book" />} />*/}
              
            </Route>

          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
