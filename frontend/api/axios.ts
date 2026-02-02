import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"


const baseConfig = {
    baseURL: baseUrl,

    timeout: 500
}


export const clientAxios = axios.create({
    ...baseConfig,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
});

export const createServerAxios = (cookieHeader?: string) =>
    axios.create({
        ...baseConfig,
        withCredentials: !!cookieHeader,
        headers: {
            Cookie:cookieHeader,
        },
    });
