import axios from "axios";

const urlApi = "http://localhost:3001";

const api = axios.create({
    baseURL:urlApi
});

export default api;