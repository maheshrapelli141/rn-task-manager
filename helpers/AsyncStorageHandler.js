import { AsyncStorage } from 'react-native';

export const storeData = async (key,data) => await AsyncStorage.setItem(key,JSON.stringify(data));
export const retriveData = async (key) => await AsyncStorage.getItem(key);