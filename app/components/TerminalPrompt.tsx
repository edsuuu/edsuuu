"use client";

import { useEffect, useState } from "react";

import { useLoader } from "../contexts/LoaderContext";

interface TerminalPromptProps {
    user?: string;
    host?: string;
    path: string;
    command?: string;
    children?: React.ReactNode;
    className?: string;
}

export default function TerminalPrompt({
    user = "guest",
    host = "internet",
    path,
    command,
    children,
    className = "mb-10",
}: TerminalPromptProps) {
    const [displayedCommand, setDisplayedCommand] = useState("");
    const { isLoading } = useLoader();

    useEffect(() => {
        if (isLoading) return;

        setDisplayedCommand("");

        if (!command) {
            return;
        }

        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex < command.length) {
                setDisplayedCommand(command.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(intervalId);
            }
        }, 50);

        return () => clearInterval(intervalId);
    }, [command, isLoading]);

    return (
        <div
            className={`text-lg md:text-xl font-bold opacity-80 font-mono flex flex-wrap items-center gap-2 ${className}`}
        >
            <div className="flex items-center gap-px">
                <span className="text-green-500">
                    {user}@{host}
                </span>
                :<span className="text-blue-500">{path}</span>$
            </div>
            <span className="text-gray-600 dark:text-gray-100">
                {displayedCommand}
            </span>
            {children}
        </div>
    );
}
