import {userData} from '../../interfaces/authInterface';

export interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  errorMessage: string;
  successMessage: string;
  userName: string | null;
  userId: string | null;
  userData: userData | null;
}

type AuthAction =
  | {type: 'signUp'; payload: {userName: string; userId: string}}
  | {type: 'updateUserData'; payload: userData}
  | {type: 'addError'; payload: string}
  | {type: 'addSuccessMessage'; payload: string}
  | {type: 'removeError'}
  | {type: 'removeSuccessMessage'}
  | {type: 'notAuthenticated'}
  | {type: 'validateUser'; payload: userData}
  | {type: 'logout'};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'addError':
      return {
        ...state,
        status: 'not-authenticated',
        userName: null,
        userId: null,
        errorMessage: action.payload,
      };
    case 'removeError':
      return {
        ...state,
        errorMessage: '',
      };
    case 'removeSuccessMessage':
      return {
        ...state,
        successMessage: '',
      };

    case 'signUp':
      return {
        ...state,
        errorMessage: '',
        status: 'authenticated',
        userName: action.payload.userName,
        userId: action.payload.userId,
      };
    case 'updateUserData':
      return {
        ...state,
        userData: action.payload,
        successMessage: 'Succesfully Updated',
      };
    case 'validateUser':
      return {
        ...state,
        errorMessage: '',
        status: 'authenticated',
        userData: action.payload,
      };
    case 'logout':
    case 'notAuthenticated':
      return {
        ...state,
        status: 'not-authenticated',
        userName: null,
        userId: null,
      };

    default:
      return state;
  }
};
