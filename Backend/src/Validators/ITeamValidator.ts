import { Player, Team } from "@prisma/client";
import { ValidationResult } from "./ValidationResult";
import { PlayerResponse } from "src/DTO/PlayerResponse.dto";



export abstract class ITeamValidator {
     
    abstract canCreateTeam(player:PlayerResponse):ValidationResult

    abstract canDeleteTeam(team:Team,player:Player):ValidationResult

    abstract canJoinTeam(team:Team,player:Player):ValidationResult

    abstract isCaptain(team:Team,player:Player):ValidationResult


    

}