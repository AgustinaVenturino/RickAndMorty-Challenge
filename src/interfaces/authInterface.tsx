export interface userData {
  name: string;
  mail: string;
  phone: string;
  surname: string;
  age: string;
}
export interface UpdateUserDataResponse {
  message: string;
  metadata: any;
  newUserData: userData;
}
export interface UpdateUserData {
  name: string;
  phone: string;
  surname: string;
  age: string;
}
export interface LoginResponse {
  userId: string;
  userName: string;
}
export interface getUserDataResponse {
  userId: string;
  userData: userData;
}
export interface LoginData {
  mail: string;
  password: string;
}
