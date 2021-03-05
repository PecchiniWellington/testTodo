import * as authUserType from "./authUser.types";
const initialState = {
  token: localStorage.getItem("Authorization"),
  isLoggedIn: false,
  isLoading: false,
  user: {},
  messageError: "",
  messageSucces: "",
};

export const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case authUserType.SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
      };
    case authUserType.SIGN_IN_SUCCESS:
      localStorage.setItem("Authorization", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        user: action.payload.user,
        messageSucces: action.payload.messageSuccess,
      };
    case authUserType.SIGN_IN_ERROR:
      localStorage.removeItem("Authorization");
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        messageError: action.payload,
      };
    case authUserType.SIGN_UP_START:
      return {
        ...state,
        isLoading: true,
      };
    case authUserType.SIGN_UP_SUCCESS:
      localStorage.setItem("Authorization", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        user: action.payload.user,
        messageSucces: action.payload.messageSuccess,
      };
    case authUserType.SIGN_UP_ERROR:
      localStorage.removeItem("Authorization");
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        messageError: action.payload,
      };
    case authUserType.SIGN_IN_ME_START:
      return {
        ...state,
        isLoading: true,
      };
    case authUserType.SIGN_IN_ME_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
        user: action.payload.user,
        messageSucces: action.payload.messageSuccess,
      };
    case authUserType.SIGN_IN_ME_ERROR:
      localStorage.removeItem("Authorization");
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        messageError: action.payload,
      };
    case authUserType.CHECK_LOGIN:
      const checkLog = () => {
        if (localStorage.getItem("Authorization")) {
          return true;
        } else {
          return false;
        }
      };
      return {
        ...state,
        isLoggedIn: checkLog(),
      };
    case authUserType.SIGN_OUT_START:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    case authUserType.SIGN_OUT_SUCCESS:
      /* */
      localStorage.removeItem("Authorization");
      return {
        ...state,
        messageSucces: action.payload,
        isLoggedIn: false,
        user: {},
      };
    case authUserType.SIGN_OUT_ERROR:
      return {
        ...state,
        messageError: action.payload,
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};
