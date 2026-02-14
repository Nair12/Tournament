import { Transform } from "class-transformer";
import { IsArray, IsOptional, IsString } from "class-validator";


export class ResumeFiltedDto{
     @IsOptional()
     @IsString()
     language?:string


     @IsOptional()
     @IsArray()
     @Transform(({value}:{value:string})=> typeof value == 'string'?value.split("/"):value)
     levelRange?:string[]

     @IsOptional()
     @IsString()
     type:string 

     @IsOptional()
     @IsArray()
     @Transform(({value}:{value:string})=> typeof value == 'string'?value.split("/") :value)
     roles:string[]




     
     
     



}