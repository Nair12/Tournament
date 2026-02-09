import axios from 'axios';
import { redirect } from 'next/navigation';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"


const baseConfig = {
    baseURL: baseUrl,
}


export const clientAxios = axios.create({
    ...baseConfig,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,


});

clientAxios.interceptors.response.use((response) => 
    {
    return response;
    },
    (error) => {
        if (error.response) {
            const status = error.response.status;
            if (status === 401) {
                window.location.href = "/login"
            }
        }


        return Promise.reject(error)


    }
 
)

export const createServerAxios = (cookieHeader?: string) => {
    const instanse = axios.create({
        ...baseConfig,
        withCredentials: !!cookieHeader,
        headers: {
            Cookie: cookieHeader,
        },
    });

    instanse.interceptors.response.use((response) => {
        return response;
    },
        (error) => {
            if (error.response) {
                const status = error.response.status;
                if (status === 401) {
                   redirect('/login'); 
                }
            }


            return Promise.reject(error)


        }


    )
    return instanse
}
