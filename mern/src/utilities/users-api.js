// http://localhost:3001/api/users
const BASE_URL = '/api/users';

export async function signUp(userData) {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    // HTTP status code
    // code 200
    // 401 not found
    if (res.ok) {
        // for the front-end app
        return res.json();
    } else {
        console.log("here !");
        // error
        throw new Error('Invalid Sign Up');
    }
}

export async function login(credentials) {
    // http://localhost:3001/api/users/login
    // here, credentials means username and password which we got it from the LoginForm.jsx
    // and sent it via the user-service.js
    /*
        {
            "username: "suresh",
            "password": "password"
        }
     */
    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
    });
    // everything went fine
    if (res.ok) {
        return res.json();
    }
    // login failed, send error
    else {
        throw new Error('Invalid Log In');
    }
}

async function sendRequest(url, method = 'GET', payload = null) {
    const options = {method};
    // if you want to send data to the server
    if (payload) {
        // we must send JSON
        options.headers = {
            'Content-Type': 'application/json'
        };
        // Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
        options.body = JSON.stringify(payload);
    }
    // tell fetch function to send data to URL with some data
    // if there is any data
    // this depends on HTTP methods such as GET OR POST
    const res = await fetch(url, options);
    // HTTP status code 200, means everything went fine
    if (res.ok) return res.json();
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
    throw new Error('Bad Request');
}

export function checkToken() {
    // http://localhost:3001/api/users/check-token
    return sendRequest(`${BASE_URL}/check-token`);
}
