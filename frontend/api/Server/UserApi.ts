import { createServerAxios } from "../axios"




export const ServerUserApi = {

    getUserData: async (cookie?: string) => {

     
        const axios = createServerAxios(cookie)
        console.log(axios.defaults.baseURL)
        
        const res = await axios.get('/Player/me')
        return res.data
    },
    getUserStats:async(cookie?:string)=>{
        const axios  = createServerAxios(cookie)
        
        const res = await axios.get('/faceit/me/stats')
        return res.data 
    }


}
