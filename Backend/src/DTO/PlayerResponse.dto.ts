import { Exclude,Expose, Type } from "class-transformer";
import { IsString } from "class-validator";
import { TeamResponse } from "./TeamReponse.dto";
import { FaceitUserRequstDto } from "./FaceitUserRequest.dto";
import { FaceitUserResponse } from "./FaceitUserResponse.dto";



@Exclude()
export class PlayerResponse
{
    @Expose()
    id : String
    
    @Expose()
    email: String 

    password: String 
    
   createdAt: Date

   updatedAt: Date

   teamId: String

   @Expose()
   @Type(()=>FaceitUserResponse)
   faceitProfile? :FaceitUserResponse
    
   @Expose()
   @Type(()=>TeamResponse)
   team:TeamResponse

}