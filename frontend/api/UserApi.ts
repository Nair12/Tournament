import { LoginRequest } from "@/models/generated.schemas"
import {api} from "./axios"


export const UserApi = {

    login: async (payload:LoginRequest)=>{
        try{
              const res = await  api.post<{access_token :string}>('/Player/login',payload)
           
          if(res.data.access_token  != null){
            localStorage.setItem("token",res.data.access_token)
          }
          return res.data
        }
        catch(ex){
           throw ex
        }
                    
    }

}