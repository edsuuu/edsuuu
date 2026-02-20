import { GithubController } from "../controllers/GithubController";
import { GithubService } from "../services/GithubService";

export const dynamic = "force-dynamic";

export async function GET() {
    const service = new GithubService();
    const controller = new GithubController(service);

    return await controller.getData();
}
