import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const token = window.localStorage.getItem("token");
const config = {
  headers: {
    Authorization: token,
  },
};
export const typesUser = {
    POST_USER: "POST_USER",
    GET_ALL_USERS: "GET_ALL_USERS",
    GET_USER_BY_ID: "GET_USER_BY_ID",
    DELETE_USER: "DELETE_USER"
  };



  export const getUsers = () =>{
    try{ return async (dispatch) =>{
      const {data} = await axios.get(`${BASE_URL}/users`)
      console.log('data',data)
      return dispatch({
        type: typesUser.GET_ALL_USERS,
        payload: data
      })
    }
  } catch (error) {
      console.log(error)
    }
  }

  export const postUser = (user) => {
    return (dispatch) => {
      return axios.post(`${BASE_URL}/users`, user, config)
        .then(response => {
          dispatch({
            type: typesUser.POST_USER,
            payload: response.data
          });
        })
        .catch(error => {
          throw error;
        });
    };
  }
  export const getUserById = (id) => {
    try {
      return async (dispatch) => {
        const { data } = await axios.get(`${BASE_URL}/users/${id}`);
        return dispatch({
          type: typesUser.GET_USER_BY_ID,
          payload: data
        });
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  export const deleteUser = (id) => {
    try {
      return async (dispatch) =>{
        const {data} = await axios.delete(`${BASE_URL}/users/${id}`)
        return dispatch({
          type: typesUser.DELETE_USER,
          payload: data
        })
      }
    }
    catch (error) {
      console.log(error)
    }
  }