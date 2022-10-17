import sendRequest from './send-request';



const BASE_URL = '/api/elections';


export function getAll() {
    return sendRequest(BASE_URL, 'GET');
}

export function add(electionData){
    return sendRequest(`${BASE_URL}/new`, 'POST', electionData);
}

export function deleteElection() {
    return sendRequest(BASE_URL, 'DELETE');
}