export interface GithubRepo {
    id: string;
    name: string;
    description: string | null;
    html_url: string;
    languages: string[];
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    topics: string[];
}

export interface GithubContextType {
    repos: GithubRepo[] | null;
    loading: boolean;
    error: string | null;
    refresh: () => Promise<void>;
}
