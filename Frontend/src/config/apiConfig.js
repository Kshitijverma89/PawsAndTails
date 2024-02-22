import axios from "axios";
export const API_BASE_URL = `http://localhost:8000`

const jwt = JSON.parse(localStorage.getItem('token'));
console.log(jwt)
export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Authorization": `Bearer ${jwt}`,
        // "Content-Type": "application/json"
    }
})
