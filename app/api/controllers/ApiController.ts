import { NextResponse } from "next/server";

import { ContactService } from "../services/ContactService";
import { GithubService } from "../services/GithubService";
import { WakatimeService } from "../services/WakatimeService";

export class ApiController {
    private githubService: GithubService;
    private wakatimeService: WakatimeService;
    private contactService: ContactService;

    constructor() {
        this.githubService = new GithubService();
        this.contactService = new ContactService();

        const wakaKey = process.env.WAKATIME_API_KEY;
        if (!wakaKey) {
            console.error("WAKATIME_API_KEY not found");
        }
        this.wakatimeService = new WakatimeService(wakaKey || "");
    }

    // GitHub
    public async getGithubData() {
        try {
            const data = await this.githubService.getRepos();
            if (!data) {
                return NextResponse.json(
                    { error: "Failed to fetch GitHub data" },
                    { status: 500 }
                );
            }
            return NextResponse.json(data);
        } catch (error) {
            console.error("Error in getGithubData:", error);
            return NextResponse.json(
                { error: "Internal Server Error" },
                { status: 500 }
            );
        }
    }

    // Wakatime
    public async getWakatimeData() {
        try {
            const allTimeData = await this.wakatimeService.getAllTimeStats();

            const formattedStats = allTimeData?.data
                ? {
                    daily_average: allTimeData.data.daily_average,
                    human_readable_daily_average:
                        allTimeData.data.human_readable_daily_average,
                    languages: allTimeData.data.languages.filter((lang: { total_seconds: number; name: string }) => lang.total_seconds >= 72000 && lang.name !== "Other").slice(0, 10),
                    editors: allTimeData.data.editors.filter((editor: { total_seconds: number }) => editor.total_seconds >= 3600),
                    operating_systems: allTimeData.data.operating_systems,
                }
                : null;

            const formattedAllTime = allTimeData?.data
                ? {
                    text: allTimeData.data.text,
                    total_seconds: allTimeData.data.total_seconds,
                    range: allTimeData.data.range,
                }
                : null;

            return NextResponse.json({
                all_time: formattedAllTime,
                stats: formattedStats,
            });
        } catch (error) {
            console.error("Error in getWakatimeData:", error);
            return NextResponse.json(
                { error: "Failed to fetch Wakatime data" },
                { status: 500 }
            );
        }
    }

    // Contact
    public async handleContactPost(request: Request) {
        try {
            const body = await request.json();
            const result = await this.contactService.sendEmail(body);
            return NextResponse.json({ success: true, data: result });
        } catch (error: unknown) {
            console.error("Contact Error:", error);
            const message = error instanceof Error ? error.message : "Internal Server Error";
            return NextResponse.json(
                { error: message },
                { status: message.includes("validation") || message.includes("Invalid") ? 400 : 500 },
            );
        }
    }
}
