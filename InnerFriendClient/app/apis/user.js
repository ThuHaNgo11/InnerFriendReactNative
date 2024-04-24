import axios from "axios";
import EncryptedStorage from 'react-native-encrypted-storage';

export const signup2 = async (email, password, confirmPassword) => {
    try {
      const response = await axios.post('http://localhost:3000/api/users', {
        email,
        password,
        confirmPassword,
      });
  
      return { success: true };
    } catch (error) {
        return { success: false, error: error };
    }
  };

export const signup = async (email, password, confirmPassword) => {
    return { success: true, message: 'User created', data: { email: email } }
}

export const login2 = async (email, password) => {
    try {
        const data = await axios.post('http://localhost:3000/api/users/login', {
            email,
            password,
        });

        await EncryptedStorage.setItem( //then? 
            "user_session",
            JSON.stringify({ user, token } = data)
        );
        return { success: true };
    } catch (error) {
        return { success: false, error: error };
    }
}

export const login = async (email, password) => {
    const data = { user: "TestUser data", token: "tokenString" }
    try {
        await EncryptedStorage.setItem(
            "user_session",
            JSON.stringify({ user, token } = data)
        );
    } catch (error) {
        return { success: false, error: error };
    }
    return { success: true };
}

export const checkAuthenticated = async () => {
    try {
        const user_session = await EncryptedStorage.getItem("user_session");
        console.log(user_session);
        if (user_session) {
            return { success: true, error: null };
        }
        return {success: false, error: null};
        
    } catch (error) {
        return {
            success: false,
            error: error,
        };
    }
}
