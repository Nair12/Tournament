import { Inject, Injectable } from "@nestjs/common";
import { ITeamValidator } from "./ITeamValidator";
import { ValidationResult } from "./ValidationResult";
import { IPlayerRepository } from "src/Repository/IPlayer.repository";
import { ITeamRepository } from "src/Repository/ITeam.repository";
import { isValidDate } from "rxjs/internal/util/isDate";
import { Player, Team } from "@prisma/client";
import { PlayerResponse } from "src/DTO/Player/PlayerResponse.dto";



@Injectable()
export class TeamValidador extends ITeamValidator {

    constructor(
    ) {
        super()
    }


    canCreateTeam(player: PlayerResponse): ValidationResult {
        

        if (player.teamId !== null && player.teamId !== undefined) {
            return {
                isValid: false,
                message: "Player already in a team"
            }
          
        }
        return {
            isValid: true
        }

    }

    canJoinTeam(team: Team, player: Player): ValidationResult {
        
        if (player.teamId !== null) {
            return {
                isValid: false,
                message: "Player already in a team"
            }
        }
        
        return{
            isValid:true
        }
    }

    canDeleteTeam(team: Team, player: Player): ValidationResult {

        if (!this.canEdit(team, player.id).isValid) {
            return {
                isValid: false,
                message: "Only captain can delete the team"
            }
        }
        return {
            isValid: true
        }

    }

    canEdit(team: Team, requestId:string): ValidationResult {
        if (team.captainId == requestId) {
            return {
                isValid: true,
            }
        }
        return {
            isValid: false,
        }
    }


}