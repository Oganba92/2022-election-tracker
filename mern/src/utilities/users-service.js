import * as usersAPI from './users-api';

export async function signUp(userData) {
    try {
        const token = await usersAPI.signUp(userData);
        // save the data to local storage
        localStorage.setItem('token', token);
        return token;
    } catch {
        throw new Error("Invalid Sign Up");
    }
}