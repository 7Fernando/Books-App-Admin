import axios from "axios";
import {authorizationAdmin} from "../../helpers/token"

const url = process.env.VITE_BASE_URL;

export const typesAuthors = {
  GET_ALL_AUTHORS: "GET_ALL_AUTHORS",
  GET_AUTHORS_BOOK:"GET_AUTHORS_BOOK"
};

export const getAuthors = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${url}/author`,authorizationAdmin());
      return dispatch({
        type: typesAuthors.GET_ALL_AUTHORS,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const getAuthorsBook = (name) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${url}/author/S?name=${name}`,authorizationAdmin());
      return dispatch({
        type: typesAuthors.GET_AUTHORS_BOOK,
        payload: data.book,
      });
    };
  } catch (error) {
    console.error(error);
  }
};
