import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
        AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log(e);
    }
};

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value ? value : null;
    } catch (e) {
        console.error(e);
        return null;
    }
};
