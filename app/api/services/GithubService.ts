
import { GET_USER_REPOS_QUERY } from "./githubQueries";

interface GraphQLRepo {
    id: string;
    name: string;
    description: string | null;
    url: string;
    stargazers: { totalCount: number };
    forks: { totalCount: number };
    updatedAt: string;
    repositoryTopics: { nodes: { topic: { name: string } }[] };
    languages: { nodes: { name: string }[] };
}

export class GithubService {
    private baseUrl: string = "https://api.github.com/graphql";
    private token: string;

    constructor() {
        const token = process.env.GITHUB_TOKEN;
        if (!token) {
            throw new Error("GITHUB_TOKEN not found");
        }
        this.token = token;
    }

    public async getRepos() {
        try {
            const response = await fetch(this.baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this.token}`
                },
                body: JSON.stringify({ query: GET_USER_REPOS_QUERY }),
                next: { revalidate: 0 }
            });

            if (!response.ok) throw new Error(`GitHub API error: ${response.statusText}`);

            const result = await response.json();

            if (result.errors) {
                console.error("GraphQL Errors:", result.errors);
                throw new Error("GitHub GraphQL API error");
            }

            const repos = result.data.user.repositories.nodes;

            // Filter out specific repos
            const hiddenRepos = ["edsuuu", "html-css", "clones", "twitter", "hex", "projetopessoal", "javascript", "automacao-trampo", "typescript-solid", "typescript-study", "games"];
            const filteredRepos = repos.filter((repo: GraphQLRepo) => !hiddenRepos.some(hidden => repo.name.toLowerCase().includes(hidden)));

            // Map to our interface
            return filteredRepos.map((repo: GraphQLRepo) => ({
                id: repo.id,
                name: repo.name,
                description: repo.description,
                html_url: repo.url,
                languages: repo.languages.nodes.map((l: { name: string }) => l.name),
                stargazers_count: repo.stargazers.totalCount,
                forks_count: repo.forks.totalCount,
                updated_at: repo.updatedAt,
                topics: repo.repositoryTopics.nodes.map((t: { topic: { name: string } }) => t.topic.name)
            }));

        } catch (error) {
            console.error("Error fetching GitHub repos:", error);
            return null;
        }
    }
}
