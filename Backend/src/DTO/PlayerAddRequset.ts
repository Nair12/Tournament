import { Exclude,Expose, Type } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";
import { min } from "rxjs";

export class PlayerAddRequest
{
    name:String

    @IsEmail()
    email:String

    @MinLength(6)
    password:String

 




}




