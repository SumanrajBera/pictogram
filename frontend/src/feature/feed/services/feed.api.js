import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000"
})

export async function getFeed() {
    let response = await api.get("/feed")
    return response.data
}