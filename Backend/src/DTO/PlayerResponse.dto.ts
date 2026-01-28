import { Exclude,Expose, Type } from "class-transformer";
import { IsString } from "class-validator";
import { TeamResponse } from "./TeamReponse.dto";



@Exclude()
export class PlayerResponse
{
    @Expose()
    id : String

    @Expose()
    @IsString()
    name:String

    @Expose()
    @IsString()
    login:String

    @Expose()
    email: String 

   @Expose()
   password: String 
 
   
   createdAt: Date

   updatedAt: Date

   teamId: String
    
   @Expose()
   @Type(()=>TeamResponse)
   team:TeamResponse

}