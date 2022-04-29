import { useState, useEffect } from "react";
//import "./tableUsers.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userMail } from "../../datatablesource";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers, setUserMail } from "../../redux/actions/user";

const Datatable = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const allUser = useSelector((state) => state.user.allUser);

  const allUserMail = allUser.map((user) => {
    return {
      id: user.id,
      mail: user.mail,
    };
  });

  const [data, setData] = useState(allUser);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    if (ids.length > 0) {
      dispatch(
        setUserMail(allUserMail.filter((mail) => ids.includes(mail.id)))
      );
    } else {
      dispatch(setUserMail([]));
    }
  }, [ids]);

  useEffect(() => {
    setData(allUser);
  }, [allUser]);

  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userMail}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        onSelectionModelChange={(ids) => {
          setIds(ids);
        }}
      />
    </div>
  );
};

export default Datatable;
