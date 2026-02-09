import { TeamApi } from "@/app/api/Client/TeamApi";
import { useMutation } from "@tanstack/react-query";


export const useTeamRegister = () => useMutation({
    mutationKey: ['team','register'],
    mutationFn: async (formData: FormData) => await TeamApi.create(formData)
    
})