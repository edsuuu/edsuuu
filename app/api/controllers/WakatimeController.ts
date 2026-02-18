import { NextResponse } from "next/server";

import { WakatimeService } from "../services/WakatimeService";

export class WakatimeController {
    private service: WakatimeService;

    constructor(service: WakatimeService) {
        this.service = service;
    }

    async getData() {
        const getAllTime = this.service.getAllTimeStats();

        try {
            const allTimeData = await getAllTime;

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
            console.error("Error in WakatimeController:", error);
            return NextResponse.json(
                { error: "Failed to fetch Wakatime data" },
                { status: 500 }
            );
        }
    }
}
