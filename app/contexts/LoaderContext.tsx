"use client";

import { createContext, useContext, useState } from "react";

interface LoaderContextType {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    registerBlocker: (id: string) => void;
    unregisterBlocker: (id: string) => void;
    isBlocked: boolean;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export function LoaderProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [blockers, setBlockers] = useState<Set<string>>(new Set());

    const registerBlocker = (id: string) => {
        setBlockers((prev) => {
            const newBlockers = new Set(prev);
            newBlockers.add(id);
            return newBlockers;
        });
    };

    const unregisterBlocker = (id: string) => {
        setBlockers((prev) => {
            const newBlockers = new Set(prev);
            newBlockers.delete(id);
            return newBlockers;
        });
    };

    return (
        <LoaderContext.Provider
            value={{
                isLoading,
                setIsLoading,
                registerBlocker,
                unregisterBlocker,
                isBlocked: blockers.size > 0,
            }}
        >
            {children}
        </LoaderContext.Provider>
    );
}

export function useLoader() {
    const context = useContext(LoaderContext);
    if (context === undefined) {
        throw new Error("useLoader must be used within a LoaderProvider");
    }
    return context;
}
