import axios from "axios";

export const api = axios.create({
    baseURL: "https://savecash.vercel.app/api"
})