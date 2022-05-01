import axios from "axios";
import {authorizationAdmin} from "../../helpers/token"
const BASE_URL = process.env.REACT_APP_BASE_URL;


// const authorizationAdmin= {
//   headers: {
//     authorization: `Bearer ${token}`,user: user},
//   }

export const typesUser = {
  POST_USER: "POST_USER",
  GET_ALL_USERS: "GET_ALL_USERS",
  GET_USER_BY_ID: "GET_USER_BY_ID",
  DELETE_USER: "DELETE_USER",
  MODIFY_USER: "MODIFY_USER",
  POST_MAIL_USER: "POST_MAIL_USER",
  SET_MAIL_USER: "SET_MAIL_USER",
};

export const setUserMail = (data) => {
  try {
    return {
      type: typesUser.SET_MAIL_USER,
      payload: data,
    };
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(
        "http://localhost:3001/api/users",
        authorizationAdmin()
      );
      console.log("data", data);
      return dispatch({
        type: typesUser.GET_ALL_USERS,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const postUser = (user) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/users", user, authorizationAdmin())
      .then((response) => {
        dispatch({
          type: typesUser.POST_USER,
          payload: response.data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
export const getUserById = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(
        `http://localhost:3001/api/users/${id}`,
        authorizationAdmin()
      );
      return dispatch({
        type: typesUser.GET_USER_BY_ID,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.delete(
        `http://localhost:3001/api/users/admin/${id}`,
        authorizationAdmin()
      );
      return dispatch({
        type: typesUser.DELETE_USER,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};


  export const mailUsers = (input)=>{
   
    return (dispatch) => {
      return axios.post('http://localhost:3001/api/users/admin/mail',input, authorizationAdmin())
      
        .then(response => {
         
          dispatch({
            type: typesUser.POST_MAIL_USER,
            payload: response.data
            
          });
        },)
        .catch(error => {
          throw error;
        });
      
  };
};
