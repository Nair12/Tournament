import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

export const api = axios.create({
    baseURL:baseUrl,
    // headers:{
    //     "Content-Type":"application/json"
    // }
    withCredentials:true,

})

