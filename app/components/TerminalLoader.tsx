"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import ParticlesBackground from "./ParticlesBackground";

interface TerminalLoaderProps {
    onComplete: () => void;
}

const logMessages = [
    "const portfolio = new Developer();",
    "portfolio.setName('Edson');",
    "portfolio.setRole('FullStack');",
    "Fetching projects from GitHub API...",
    "Loading styles: tailwindcss v4.0",
    "Parsing database connections...",
    "Rendering React components...",
    "Compiling Typescript assets...",
    "Optimizing bundle size...",
    "Booting up UI experience...",
];

const TerminalLoader = ({ onComplete }: TerminalLoaderProps) => {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const visibleLogs = useMemo(() => {
        const totalLogs = logMessages.length;
        const count = Math.floor((progress / 100) * totalLogs);
        return logMessages.slice(0, count);
    }, [progress]);

    useEffect(() => {
        const duration = 3500;
        const intervalTime = 20;
        const steps = duration / intervalTime;
        const increment = 100 / steps;

        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            const exitTimer = setTimeout(() => {
                setIsExiting(true);

                const completeTimer = setTimeout(() => {
                    onComplete();
                }, 800);
                return () => clearTimeout(completeTimer);
            }, 700);
            return () => clearTimeout(exitTimer);
        }
    }, [progress, onComplete]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [visibleLogs]);

    return (
        <div
            className={`fixed inset-x-0 top-0 h-[115vh] z-50 flex items-start justify-center text-slate-800 dark:text-slate-200 font-mono cursor-wait transition-transform duration-700 ease-in-out bg-background dark:bg-background overflow-hidden`}
            style={{
                transform: isExiting ? "translateY(-100%)" : "translateY(0)",
                borderRadius: "0 0 50% 50% / 0 0 15vh 15vh",
            }}
        >
            <ParticlesBackground id="loader-particles" speed={1} />

            <div className="relative z-10 w-full max-w-4xl px-2 md:px-6 animate-fade-in mt-[20vh] md:mt-[25vh]">
                <div className="bg-white dark:bg-background border border-gray-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-xl dark:shadow-[0_0_20px_rgba(0,164,239,0.15)]">
                    <div className="bg-gray-100 dark:bg-slate-800/50 px-4 py-2 flex items-center gap-2 border-b border-gray-200 dark:border-slate-700">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-slate-400 ml-2">
                            portfolio-init.sh
                        </span>
                    </div>

                    <div className="p-6 flex flex-col gap-4">
                        <div
                            ref={scrollRef}
                            className="font-mono text-sm space-y-1"
                        >
                            <p className="text-primary mb-2">
                                $ Initializing system boot...
                            </p>
                            {visibleLogs.map((log: string, index: number) => (
                                <p
                                    key={index}
                                    className="text-gray-600 dark:text-slate-400"
                                >
                                    <span className="text-gray-400 dark:text-slate-600 mr-2">
                                        {">"}
                                    </span>
                                    <span className="animate-pulse-once">
                                        {log}
                                    </span>
                                </p>
                            ))}
                        </div>

                        <div className="mt-4">
                            <div className="text-xs text-gray-500 dark:text-slate-500 mb-2 flex justify-between font-mono uppercase tracking-wider">
                                <span>
                                    {progress >= 100
                                        ? "Boot Complete"
                                        : "Loading Modules..."}
                                </span>
                                <span>{Math.floor(progress)}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary transition-all duration-300 ease-out shadow-[0_0_10px_#00a4ef]"
                                    style={{
                                        width: `${Math.min(100, progress)}%`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function GlobalLoader() {
    const [loading, setLoading] = useState(true);

    if (!loading) return null;

    return <TerminalLoader onComplete={() => setLoading(false)} />;
}
