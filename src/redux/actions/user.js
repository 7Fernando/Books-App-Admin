import axios from "axios";
//const url = import.meta.env.VITE_BASE_URL;
const token = window.localStorage.getItem("token");
const config = {
  headers: {
    Authorization: token,
  },
};
export const typesUser = {
    POST_USER: "POST_USER",
    GET_ALL_USERS: "GET_ALL_USERS"
  };



  export const getUsers = () =>{
    try{ return async (dispatch) =>{
      const data = await axios.get('http://localhost:3001/api/users');
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
      return axios.post('http://localhost:3001/api/users', user, config)
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