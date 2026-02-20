
import { NextResponse } from "next/server";

import { GithubService } from "../services/GithubService";

export class GithubController {
    private service: GithubService;

    constructor(service: GithubService) {
        this.service = service;
    }

    public async getJsonData() {
        try {
            const data = await this.service.getRepos();
            return data;
        } catch (error) {
            console.error("Error in GithubController:", error);
            throw error;
        }
    }

    public async getData() {
        try {
            const data = await this.getJsonData();

            if (!data) {
                return NextResponse.json(
                    { error: "Failed to fetch GitHub data" },
                    { status: 500 }
                );
            }

            return NextResponse.json(data);
        } catch (_error) {
            console.error("Error in GithubController:", _error);
            return NextResponse.json(
                { error: "Internal Server Error" },
                { status: 500 }
            );
        }
    }
}
