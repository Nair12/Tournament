import { Exclude, Expose } from "class-transformer"


@Exclude()
export class RoleDto{
     @Expose()
     id: string 
     @Expose()
     name: string 
     


}