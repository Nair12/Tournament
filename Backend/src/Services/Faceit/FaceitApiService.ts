import { env } from "process";
import { IFaceitApiService } from "./IFaceitApi.service";
import { FaceitStats } from "@prisma/client";
import { FaceitStatsDto } from "src/DTO/Faceit/FaceitStatsReponse.dto";



export class FaceitApiService extends IFaceitApiService {

    private readonly BASE_URL = 'https://open.faceit.com/data/v4/';
    private readonly API_KEY = process.env.FACEIT_API_KEY

    getUserData(faceitId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async getUserStats(faceitId: string):Promise<FaceitStatsDto | null> {
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
            console.log(response);
            return await response.json()
        }
        catch (err) {
           console.log(err)
           return null;
        }
    }


}