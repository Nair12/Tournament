import { ResumeApi } from "@/app/api/Client/ResumeApi"
import { ResumeRegisterRequest } from "@/models/generated.schemas"
import { useMutation } from "@tanstack/react-query"


export const  useResumeRegister = ()=>{
     return useMutation({
        mutationKey:['resume','register'],
        mutationFn: async (payload:ResumeRegisterRequest)=> await ResumeApi.register(payload)
     })
}