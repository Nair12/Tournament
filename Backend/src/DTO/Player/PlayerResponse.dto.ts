import { Exclude,Expose, Type } from "class-transformer";
import { IsString } from "class-validator";
import { FaceitUserResponse } from "../Faceit/FaceitUserResponse.dto";
import { TeamResponse } from "../TeamReponse.dto";




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