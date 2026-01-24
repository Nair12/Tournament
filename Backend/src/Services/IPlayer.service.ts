import { PlayerAddRequest } from "src/DTO/PlayerAddRequset";
import { PlayerResponse } from "src/DTO/PlayerResponse";



export abstract class IPlayerSerivce{

    abstract getUser(id:string):Promise<PlayerResponse | null>
    abstract addUser(payload:PlayerAddRequest):Promise<void>


}