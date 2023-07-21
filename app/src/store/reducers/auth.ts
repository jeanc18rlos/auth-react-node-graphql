import { AuthActionTypes } from "../actions/auth/ActionTypes";
import { AuthActionCreators } from "../actions/auth";

const initialAuthState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (
  state = initialAuthState,
  action: AuthActionCreators
) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_USER:
    case AuthActionTypes.REGISTER_USER:
    case AuthActionTypes.REQUEST_PASSWORD_CHANGE:
    case AuthActionTypes.CHANGE_PASSWORD:
    case AuthActionTypes.LOGOUT_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case AuthActionTypes.LOGIN_USER_SUCCESS:
    case AuthActionTypes.REGISTER_USER_SUCCESS:
    case AuthActionTypes.REQUEST_PASSWORD_CHANGE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    
    case AuthActionTypes.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        user: {},
        loading: false,
      };

    case AuthActionTypes.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: null,
        loading: false,
      };

    case AuthActionTypes.LOGIN_USER_FAILED:
    case AuthActionTypes.REGISTER_USER_FAILED:
    case AuthActionTypes.REQUEST_PASSWORD_CHANGE_FAILED:
    case AuthActionTypes.CHANGE_PASSWORD_FAILED:
    case AuthActionTypes.LOGOUT_USER_FAILED:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
