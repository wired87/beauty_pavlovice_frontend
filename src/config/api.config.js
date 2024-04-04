import axios from "axios";
//http://127.0.0.1:8000/
const instance = axios.create({
    baseURL: "https://beautypavlovic.pythonanywhere.com/beauty-api",
    timeout: 50000,
});

export default instance;
