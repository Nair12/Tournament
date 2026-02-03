import { useMutation } from "@tanstack/react-query"
import { UserApi } from "@/api/Client/UserApi"    


export const useRegister = () =>{
    return useMutation({
        mutationKey:['player','register'],
        mutationFn: async (payload:FormData)=> await UserApi.regiser(payload)
    } 
)
}