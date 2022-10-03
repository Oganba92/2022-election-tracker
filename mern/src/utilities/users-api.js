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
    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
    });
    if (res.ok) {
        return res.json();
    } else {
        throw new Error('Invalid Log In');
    }
}

