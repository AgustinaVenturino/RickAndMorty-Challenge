import React, {createContext, useReducer, useEffect} from 'react';
import authApi from '../../api/authApi';
import {
  getUserDataResponse,
  LoginData,
  LoginResponse,
  UpdateUserData,
  UpdateUserDataResponse,
} from '../../interfaces/authInterface';
import {authReducer, AuthState} from './authReducer';
import {storeData, getData, clearUserData} from '../../helpers/asyncStorage';
import {userData} from '../../interfaces/authInterface';
import { EAsyncStorageKeys } from '../../enums/EAuth';

type AuthContextProps = {
  errorMessage: string;
  successMessage: string;
  userName: string | null;
  userId: string | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  userData: userData | null;
  updateUserData: (userData: UpdateUserData) => void;
  signUp: (loginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
  removeSuccessMessage: () => void;
  validateUser: () => void;
};

const initialState: AuthState = {
  status: 'checking',
  userName: null,
  userId: null,
  errorMessage: '',
  successMessage: '',
  userData: null,
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    await validateUser();
  };

  const signUp = async ({mail, password}: LoginData) => {
    try {
      const {
        data: {userId, userName},
      } = await authApi.post<LoginResponse>('/login', {
        mail,
        password,
      });
      dispatch({type: 'signUp', payload: {userName, userId}});
      storeData(EAsyncStorageKeys.UserId, userId);
    } catch (e: any) {
      dispatch({
        type: 'addError',
        payload: e.response.data.message || 'User or Password incorrect',
      });
      clearUserData();
    }
  };

  const validateUser = async () => {
    const userId = await getData(EAsyncStorageKeys.UserId);

    if (!userId) return dispatch({type: 'notAuthenticated'});
    try {
      const {
        data: {userId: token, userData},
      } = await authApi.get<getUserDataResponse>(`/user/${userId}`);
      if (token)
        dispatch({
          type: 'validateUser',
          payload: {
            ...userData,
            age: userData.age.toString(),
            phone: userData.phone.toString(),
          },
        });
    } catch (e: any) {
      dispatch({
        type: 'addError',
        payload: e.response?.data?.message || 'User not registered',
      });
      clearUserData();
    }
  };

  const updateUserData = async ({
    name,
    phone,
    surname,
    age,
  }: UpdateUserData) => {
    const userId = await getData(EAsyncStorageKeys.UserId);
    try {
      const {
        data: {newUserData},
      } = await authApi.put<UpdateUserDataResponse>(`/user/${userId}`, {
        mail: state.userData?.mail,
        name,
        phone,
        surname,
        age,
      });
      dispatch({type: 'updateUserData', payload: newUserData});
    } catch (e: any) {
      dispatch({
        type: 'addError',
        payload:
          e.response?.data?.message || "We can't update your user information",
      });
    }
  };

  const logOut = async () => {
    clearUserData();
    dispatch({type: 'logout'});
  };
  const removeError = () => {
    dispatch({
      type: 'removeError',
    });
  };
  const removeSuccessMessage = () => {
    dispatch({
      type: 'removeSuccessMessage',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        logOut,
        removeError,
        removeSuccessMessage,
        validateUser,
        updateUserData,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
