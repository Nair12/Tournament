import { env } from "process";
import { IFaceitApiService } from "./IFaceitApi.service";
import { FaceitStats } from "@prisma/client";
import { FaceitStatsDto } from "src/DTO/Faceit/FaceitStatsReponse.dto";
import { plainToInstance } from "class-transformer";



export class FaceitApiService extends IFaceitApiService {


    private readonly BASE_URL = 'https://open.faceit.com/data/v4/';
    private readonly API_KEY = process.env.FACEIT_API_KEY

    getUserData(faceitId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getUserStats(faceitId: string): Promise<FaceitStatsDto | null> {
        console.log("Api request started ")
        try {
            const response = await fetch(`${this.BASE_URL}players/${faceitId}/stats/cs2`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Error fetching player stats: ${response.statusText}`);
            }
            const data = await response.json()
            return plainToInstance(FaceitStatsDto, data, { excludeExtraneousValues: true })
        }
        catch (err) {
            console.log(err)
            return null;
        }
    }
    async getFullPlayerDetails(faceitId: string): Promise<any> {
        console.log("Player Details started")
        try {
            const responce = await fetch(`${this.BASE_URL}players/${faceitId}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${this.API_KEY}`,
                    'Content-Type': 'application/json'
                }
            })

            if (!responce.ok) {
                throw new Error("Error fetching player details")
            }
        
            return await responce.json()
            
        }
        catch (err) {
            console.log(err)
            return null
        }
    }


}