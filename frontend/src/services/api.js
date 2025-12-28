import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5400/api",
    withCredentials: true,
});

export const userLogin = (data) => {
    return api.post("auth/login", data);
};

export const userSignUp = (data) => {
    return api.post("auth/register", data);
};

export default api;