import { NextResponse } from "next/server";

import { WakatimeController } from "../controllers/WakatimeController";
import { WakatimeService } from "../services/WakatimeService";

export async function GET() {
    const apiKey = process.env.WAKATIME_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { error: "WAKATIME_API_KEY not found" },
            { status: 500 },
        );
    }

    const service = new WakatimeService(apiKey);
    const controller = new WakatimeController(service);

    return await controller.getData();
}
