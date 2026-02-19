"use client";

import { useEffect, useState } from "react";

import { useLoader } from "../contexts/LoaderContext";

interface TerminalPromptProps {
    user?: string;
    host?: string;
    path: string;
    command: string;
}

export default function TerminalPrompt({
    user = "guest",
    host = "internet",
    path,
    command,
}: TerminalPromptProps) {
    const [displayedCommand, setDisplayedCommand] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const { isLoading } = useLoader();

    useEffect(() => {
        if (isLoading) return;

        setDisplayedCommand("");
        setIsTyping(true);

        if (!command) return;

        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex < command.length) {
                setDisplayedCommand(command.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                setIsTyping(false);
                clearInterval(intervalId);
            }
        }, 50); // Adjust typing speed here

        return () => clearInterval(intervalId);
    }, [command, isLoading]);

    return (
        <div className="mb-10 text-lg md:text-xl font-bold opacity-80 font-mono">
            <span className="text-green-500">
                {user}@{host}
            </span>
            :<span className="text-blue-500">{path}</span>$
            <span className="text-gray-600 dark:text-gray-100 ml-2">
                {displayedCommand}
            </span>
            {isTyping && (
                <span className="text-gray-600 dark:text-gray-100 animate-pulse">
                    _
                </span>
            )}
        </div>
    );
}
