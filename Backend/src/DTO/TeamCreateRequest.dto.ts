import { IsOptional, IsString } from "class-validator"
import { HasMimeType, IsFile, MemoryStoredFile } from "nestjs-form-data"



export class TeamCreateRequest{
    
    name:string

    @IsOptional()
    @IsString()
    description?:string


}