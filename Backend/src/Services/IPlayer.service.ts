import { PlayerAddRequest } from "src/DTO/PlayerAddRequset";
import { PlayerResponse } from "src/DTO/PlayerResponse";



export abstract class IPlayerService{

    abstract getPlayer(id:string):Promise<PlayerResponse | null>
    abstract registerPlayer(payload:PlayerAddRequest):Promise<void>


}