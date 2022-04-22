import { typesUser } from "../actions/user";

export const initialState = {
  allUser: [],
  bkUser: [],
  userDetail: {}
};

const cases = {};


cases[typesUser.GET_ALL_USERS] = (initialState, payload) => ({
  ...initialState,
  allUser: [...payload],

  bkUser: [...payload],
});

cases[typesUser.POST_USER] = (initialState, payload) => ({
  ...initialState
});
cases[typesUser.GET_USER_BY_ID] = (initialState, payload) => ({
  ...initialState,
  userDetail: { ...payload }
});
cases[typesUser.DELETE_USER] = (initialState,payload) => ({
  ...initialState
})
export default function userReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}