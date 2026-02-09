import { RoleDto } from "./Role.dto"



export class ResumeRegisterRequest{
    
    description:string
    type: 'Casual' | 'Professional'
    language:string
    roles:RoleDto[]

}