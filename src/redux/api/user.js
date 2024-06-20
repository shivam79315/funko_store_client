import axios from "axios"

export const registerUserApi = (values) => {
    try {
        const res = axios.post('http://localhost:4000/user', values)
        return res;
    } catch (error) {
        throw error
    }
}