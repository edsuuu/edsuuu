import { NextResponse } from "next/server";

import { ApiController } from "../controllers/ApiController";

const apiController = new ApiController();

type Props = {
    params: Promise<{ resource: string }>;
};

export async function GET(request: Request, { params }: Props) {
    const { resource } = await params;

    switch (resource) {
        case "github":
            return apiController.getGithubData();
        case "wakatime":
            return apiController.getWakatimeData();
        default:
            return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }
}

export async function POST(request: Request, { params }: Props) {
    const { resource } = await params;

    if (resource === "contact") {
        return apiController.handleContactPost(request);
    }

    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
