
export class WakatimeService {
    private apiKey: string;
    private baseUrl: string = "https://wakatime.com/api/v1/users/current";

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    private getHeaders() {
        return {
            Authorization: `Basic ${Buffer.from(this.apiKey).toString("base64")}`,
        };
    }

    async getAllTimeStats() {
        try {
            const response = await fetch(`${this.baseUrl}/stats/all_time`, {
                headers: this.getHeaders(),
                cache: "no-store",
            });
            if (!response.ok) throw new Error(`Wakatime API error: ${response.statusText}`);
            return await response.json();
        } catch (error) {
            console.error("Error fetching all time stats:", error);
            return null;
        }
    }

}
