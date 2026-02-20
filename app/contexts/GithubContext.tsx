"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { GithubContextType, GithubRepo } from "../types/github";
import { useLoader } from "./LoaderContext";

const GithubContext = createContext<GithubContextType | undefined>(undefined);

const CACHE_KEY = "github_cache";
const CACHE_DURATION = 6 * 60 * 60 * 1000;

export const GithubProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [repos, setRepos] = useState<GithubRepo[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const { registerBlocker, unregisterBlocker } = useLoader();

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        registerBlocker("github-fetch");
        try {
            const response = await fetch("/api/github");
            if (!response.ok) throw new Error("Failed to fetch GitHub data");
            const result = await response.json();

            const cacheData = {
                timestamp: Date.now(),
                data: result,
            };
            localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));

            setRepos(result);
        } catch (err) {
            console.error("GitHub fetch error:", err);
            setError("Failed to load GitHub data");
        } finally {
            setLoading(false);
            unregisterBlocker("github-fetch");
        }
    };

    useEffect(() => {
        const loadFromCache = () => {
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) {
                try {
                    const parsed = JSON.parse(cached);
                    const age = Date.now() - parsed.timestamp;
                    if (age < CACHE_DURATION && parsed.data) {
                        setRepos(parsed.data);
                        setLoading(false);
                        return true;
                    }
                } catch (e) {
                    console.error("Cache parse error", e);
                }
            }
            return false;
        };

        if (!loadFromCache()) {
            fetchData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <GithubContext.Provider
            value={{ repos, loading, error, refresh: fetchData }}
        >
            {children}
        </GithubContext.Provider>
    );
};

export const useGithub = () => {
    const context = useContext(GithubContext);
    if (!context) {
        throw new Error("useGithub must be used within a GithubProvider");
    }
    return context;
};
