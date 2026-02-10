import { ResumeRegisterRequest, ResumeResponse, RoleDto } from "@/models/generated.schemas"
import { clientAxios } from "../axios"

export const ResumeApi = {
    getRoles: async () => {
        const res = await clientAxios.get<RoleDto[]>("/resume/roles")
        return res.data
    },
    register: async (payload:ResumeRegisterRequest) => {
        try {
            const res = await clientAxios.post<ResumeResponse>("/resume",payload)
            return res.data
        }
        catch (err) {
            console.log(err)
        }
    }
}