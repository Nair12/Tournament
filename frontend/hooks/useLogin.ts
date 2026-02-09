import { UserApi } from "@/app/api/Client/UserApi";
import { LoginRequest } from "@/models/generated.schemas";
import { useMutation } from "@tanstack/react-query";



export const UseLogin = ()=> useMutation({
    mutationKey: ["Login"],
    mutationFn: async (payload:LoginRequest)=> await UserApi.login(payload),
})