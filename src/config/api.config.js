import axios from "axios";

const instance = axios.create({
    baseURL: "https://beautypavlovic.pythonanywhere.com/beauty-api",
    timeout: 50000,
});

export default instance;
