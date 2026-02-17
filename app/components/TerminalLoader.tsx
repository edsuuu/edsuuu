"use client";

import { useState, useEffect, useRef } from "react";

interface TerminalLoaderProps {
    onComplete: () => void;
}

const TerminalLoader = ({ onComplete }: TerminalLoaderProps) => {
    const [logs, setLogs] = useState<string[]>([]);
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const logMessages = [
        "const portfolio = new Developer();",
        "portfolio.setName('Edson');",
        "portfolio.setRole('FullStack');",
        "Fetching projects from GitHub API...",
        "Loading styles: tailwindcss v3.0",
        "Parsing database connections...",
        "Rendering React components...",
        "Compiling Typescript assets...",
        "Optimizing bundle size...",
        "Booting up UI experience...",
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 1.25; // Extend canvas past viewport for tail
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const letters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$<>{}[]*/+=-_!?;:@#&%";
        const fontSize = 14;
        const columns = Math.ceil(canvas.width / fontSize);

        // Initialize drops with random negative values to stagger the start
        const drops = new Array(columns)
            .fill(0)
            .map(() => Math.floor(Math.random() * -50));

        const draw = () => {
            ctx.fillStyle = "rgba(10, 10, 15, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#00a4ef";
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(
                    Math.floor(Math.random() * letters.length),
                );
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (
                    drops[i] * fontSize > canvas.height &&
                    Math.random() > 0.975
                ) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const intervalId = setInterval(draw, 50);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    useEffect(() => {
        const duration = 2500;
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
        const totalLogs = logMessages.length;
        const logsToShow = Math.floor((progress / 100) * totalLogs);

        setLogs((prev) => {
            if (prev.length !== logsToShow) {
                return logMessages.slice(0, logsToShow);
            }
            return prev;
        });
    }, [progress]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div
            className={`fixed inset-x-0 top-0 h-[115vh] z-50 flex items-start justify-center text-slate-200 font-mono cursor-wait transition-transform duration-700 ease-in-out bg-[#0a0a0f] overflow-hidden`}
            style={{
                transform: isExiting ? "translateY(-100%)" : "translateY(0)",
                borderRadius: "0 0 50% 50% / 0 0 15vh 15vh",
            }}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 opacity-20 w-full h-full"
            />

            <div className="relative z-10 w-full max-w-4xl px-2 md:px-6 animate-fade-in mt-[20vh] md:mt-[25vh]">
                <div className="bg-[#11111a] border border-slate-800 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,164,239,0.15)]">
                    <div className="bg-slate-800/50 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <span className="text-xs text-slate-400 ml-2">
                            portfolio-init.sh
                        </span>
                    </div>

                    <div className="p-6 h-96 flex flex-col gap-4">
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto font-mono text-sm space-y-1 pr-2"
                        >
                            <p className="text-[#00a4ef] mb-2">
                                $ Initializing system boot...
                            </p>
                            {logs.map((log, index) => (
                                <p key={index} className="text-slate-400">
                                    <span className="text-slate-600 mr-2">
                                        {">"}
                                    </span>
                                    <span className="animate-pulse">{log}</span>
                                </p>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <div className="text-xs text-slate-500 mb-2 flex justify-between font-mono uppercase tracking-wider">
                                <span>
                                    {progress >= 100
                                        ? "Boot Complete"
                                        : "Loading Modules..."}
                                </span>
                                <span>{Math.floor(progress)}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-[#00a4ef] transition-all duration-300 ease-out shadow-[0_0_10px_#00a4ef]"
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
