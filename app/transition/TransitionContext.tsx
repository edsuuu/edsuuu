"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useContext, useRef, useState } from "react";

export interface TransitionContextType {
    completed: boolean;
    toggleCompleted: (value: boolean) => void;
    navigate: (href: string) => Promise<void>;
    registerExitCallback: (callback: () => Promise<void>) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(
    undefined,
);

export const TransitionProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [completed, setCompleted] = useState<boolean>(true);
    const router = useRouter();
    const exitCallbackRef = useRef<(() => Promise<void>) | null>(null);

    const toggleCompleted = (value: boolean) => {
        setCompleted(value);
    };

    const registerExitCallback = (callback: () => Promise<void>) => {
        exitCallbackRef.current = callback;
    };

    const navigate = async (href: string) => {
        if (exitCallbackRef.current) {
            await exitCallbackRef.current();
        }
        router.push(href);
    };

    return (
        <TransitionContext.Provider
            value={{
                completed,
                toggleCompleted,
                navigate,
                registerExitCallback,
            }}
        >
            {children}
        </TransitionContext.Provider>
    );
};

export const useTransition = () => {
    const context = useContext(TransitionContext);
    if (context === undefined) {
        throw new Error(
            "useTransition must be used within a TransitionProvider",
        );
    }
    return context;
};

export default TransitionContext;
