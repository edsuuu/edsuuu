"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface WakatimeData {
    all_time: Record<string, unknown>;
    stats: Record<string, unknown>;
    summaries: Record<string, unknown>;
}

interface WakatimeContextType {
    data: WakatimeData | null;
    loading: boolean;
    error: string | null;
    refresh: () => Promise<void>;
}

const WakatimeContext = createContext<WakatimeContextType | undefined>(
    undefined,
);

const CACHE_KEY = "wakatime_cache";
const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours

export const WakatimeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [data, setData] = useState<WakatimeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("/api/wakatime");
            if (!response.ok) throw new Error("Failed to fetch Wakatime data");
            const result = await response.json();

            const cacheData = {
                timestamp: Date.now(),
                data: result,
            };
            localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));

            setData(result);
        } catch (err) {
            console.error("Wakatime fetch error:", err);
            setError("Failed to load Wakatime data");
        } finally {
            setLoading(false);
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
                        setData(parsed.data);
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
    }, []);

    return (
        <WakatimeContext.Provider
            value={{ data, loading, error, refresh: fetchData }}
        >
            {children}
        </WakatimeContext.Provider>
    );
};

export const useWakatime = () => {
    const context = useContext(WakatimeContext);
    if (!context) {
        throw new Error("useWakatime must be used within a WakatimeProvider");
    }
    return context;
};
