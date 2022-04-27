import axios from "axios";

//const url = process.env.VITE_BASE_URL;


const token = window.localStorage.getItem("token");

const user = localStorage.getItem("user");
 const config = {
   headers: {
     Authorization: token,
  },
 };


 const authorizationAdmin = {
  headers: { authorization: `Bearer ${token}`, user: user },
};



export const typesBooks = {
  GET_ALL_BOOKS: "GET_ALL_BOOKS",
  SEARCH_BOOKS: "SEARCH_BOOKS",
  GET_AUTHORS_BOOK: "GET_AUTHORS_BOOK",
  GET_BOOK_DETAILS: "GET_BOOK_DETAILS",
  SORT_BOOKS: "SORT_BOOKS",
  SORT_SCORE: "SORT_SCORE",
  CLEAR_BOOK_DETAILS: "CLEAR_BOOK_DETAILS",
  SHOW_SEARCH_BOOK: "SHOW_SEARCH_BOOK",
  POST_BOOK: 'POST_BOOK',
  DELETE_BOOK: 'DELETE_BOOK'
};

export const getBooksAdmin = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get('http://localhost:3001/api/books/user/admin', authorizationAdmin);
      return dispatch({
        type: typesBooks.GET_ALL_BOOKS,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const searchBooks = (search) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/api/books/user/admin?name=${search}`, authorizationAdmin);
      return dispatch({
        type: typesBooks.SEARCH_BOOKS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: typesBooks.SEARCH_BOOKS,
        payload: [],
      }, console.log('entro al catch', dispatch) );
    }
  };
};

export const getBookDetails = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`http://localhost:3001/api/books/user/admin/${id}`, authorizationAdmin);
      return dispatch({
        type: typesBooks.GET_BOOK_DETAILS,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const sortBooksByName = (sort) => {
  try {
    return (dispatch) => {
      return dispatch({
        type: typesBooks.SORT_BOOKS,
        payload: sort,
      });
    };
  } catch (error) {
    console.error(error);
  }
};
//score todavia en desarrollo
export const sortBooksByScore = (sort) => {
  try {
    return (dispatch) => {
      return dispatch({
        type: typesBooks.SORT_SCORE,
        payload: sort,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const clearState = () => {
  try {
    return {
      type: typesBooks.CLEAR_BOOK_DETAILS,
    };
  } catch (error) {
    console.error(error);
  }
};
export const showSearchBook = (payload) => {
  try {
    return {
      type: typesBooks.SHOW_SEARCH_BOOK,
      payload: payload
    };
  } catch (error) {
    console.error(error);
  }
};


export const postBook = (payload) => {
  return (dispatch) => {
    return axios.post('http://localhost:3001/api/books', payload)
      .then(response => {
        dispatch({
          type: typesBooks.POST_BOOK,
          payload: response.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
}

export const deleteBook = (id) => {
  return (dispatch) => {
    return axios.delete(`http://localhost:3001/api/books/user/admin/${id}`)
      .then(response => {
        dispatch({
          type: typesBooks.DELETE_BOOK,
          payload: response.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
}