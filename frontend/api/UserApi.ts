import { LoginRequest } from "@/models/generated.schemas"
import {api} from "./axios"
import { ca } from "zod/v4/locales"


export const UserApi = {

    login: async (payload:LoginRequest)=>{
        try{
              
          const res = await  api.post('/Player/login',payload)
          return res.data
        }
        catch(ex){
           throw ex
        }
                    
    },
    regiser: async (payload:FormData)=>{
        try{
           const res = await api.post('/Player',payload,{
            headers:{}
           })
            return res.data
        
        }
        catch(ex){
            throw ex
        }
        
    }


}