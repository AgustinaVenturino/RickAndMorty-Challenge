import AsyncStorage from '@react-native-async-storage/async-storage';
import {EAsyncStorageKeys} from '../interfaces/authInterface';

const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};

const clearUserData = async () => {
  try {
    await AsyncStorage.setItem(EAsyncStorageKeys.UserId, '');
  } catch (e) {
    console.log(e);
  }
};

export {storeData, getData, clearUserData};
