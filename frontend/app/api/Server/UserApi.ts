import { ResumeResponse, TeamResponse } from "@/models/generated.schemas"
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
    },
    getTeamDetails:async(id:string, cookie?:string)=>{
        const axios = createServerAxios(cookie)

        const res = await axios.get<TeamResponse>(`/Team/${id}`)
        return res.data
    },
    getResumes: async (cookie:string,params: Record<string,string>|undefined)=>{
        console.log("api started")
        console.log(params)
        const axios = createServerAxios(cookie)
        const res = await axios.get<ResumeResponse[]>(`/resume`,{
            params:params
        })
        return res.data 
    }



}
