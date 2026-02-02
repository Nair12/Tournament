

export class FaceitApiSerivce{
     
    private readonly BASE_URL = 'https://open.faceit.com/data/v4/';

    async getPlayerStats(faceitId: string, apiKey: string): Promise<any> {
        const response = await fetch(`${this.BASE_URL}players/${faceitId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching player stats: ${response.statusText}`);
        }
        return await response.json();
    }

}