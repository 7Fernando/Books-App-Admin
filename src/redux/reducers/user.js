import { typesUser } from "../actions/user";

export const initialState = {
  allUser: [],
  bkUser: [],
  userDetail: {},
  userMail: [],
};

const cases = {};

cases[typesUser.GET_ALL_USERS] = (initialState, payload) => ({
  ...initialState,
  allUser: [...payload],

  bkUser: [...payload],
});

cases[typesUser.POST_USER] = (initialState, payload) => ({
  ...initialState,
});
cases[typesUser.GET_USER_BY_ID] = (initialState, payload) => ({
  ...initialState,
  userDetail: { ...payload },
});
cases[typesUser.DELETE_USER] = (initialState, payload) => ({
  ...initialState,
});
cases[typesUser.POST_MAIL_USER] = (initialState, payload) => ({
  ...initialState,
});
cases[typesUser.SET_MAIL_USER] = (initialState, payload) => {
  console.log(payload);
  return {
    ...initialState,
    userMail: [...payload],
  };
};

cases[typesUser.GET_USER] = (initialState, payload) => ({
  ...initialState,
  userDetail: {...payload},
});

export default function userReducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
