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

export function getToken() {
    // read the token from the local storage
    const token = localStorage.getItem('token');
    // we cannot find a token
    if (!token) return null;
    // there is a token
    // grab the payload from the JWT
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp < Date.now() / 1000) {
        // is expired
        localStorage.removeItem('token');
        return null;
    }
    // everything went well, return the token
    return token;
}

export function getUser() {
    // get the token
    const token = getToken();
    // return user
    /*
    {
      "user": {
            "name": "testuser",
            "email": "testuser@abc.com",
            "_id": "633b17c566e0c1b670182013",
            "createdAt": "2022-10-03T17:11:33.376Z",
            "updatedAt": "2022-10-03T17:11:33.376Z",
            "__v": 0
        },
          "iat": 1664817093,
          "exp": 1664903493
        }
     */
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}