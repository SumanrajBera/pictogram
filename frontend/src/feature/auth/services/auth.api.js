import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
})

export async function login(username, password) {
    let response = await api.post("/api/auth/login", {
        username,
        email: username,
        password
    })

    return response.data
}

export async function register(username, email, password) {
    let response = await api.post("/api/auth/register", {
        username,
        email,
        password
    })

    return response.data
}

export async function getMe() {
    let response = await api.get("/api/auth/getMe")
    return response.data
}