import { ResumeApi } from "@/app/api/Client/ResumeApi"
import { useQuery } from "@tanstack/react-query"



export const useRoles = ()=>{
    return useQuery({
        queryKey:["roles","get"],
        queryFn: ()=> ResumeApi.getRoles()
    })

}