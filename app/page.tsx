"use client";

import {
    ChevronDown,
    Code,
    Cpu,
    GitBranch,
    Monitor,
    Server,
    Terminal,
} from "lucide-react";
import { useEffect, useState } from "react";

import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "./lang";

interface WakatimeLanguage {
    name: string;
    total_seconds: number;
    percent: number;
    text: string;
}

import { useWakatime } from "./contexts/WakatimeContext";
import TransitionLink from "./transition/TransitionLink";

export default function Home() {
    const { lang } = useLanguage();
    const { data, loading } = useWakatime();
    const [syntaxIndex, setSyntaxIndex] = useState(0);

    const wakatimeLanguages: WakatimeLanguage[] =
        (data?.stats as { languages: WakatimeLanguage[] })?.languages || [];

    const homeTranslations = translations[lang].home;

    const syntaxes = [
        {
            name: "php",
            prefix: `$${homeTranslations.languages} = [`,
            suffix: "];",
            color: "text-indigo-400",
        },
        {
            name: "javascript",
            prefix: `const ${homeTranslations.languages} = [`,
            suffix: "];",
            color: "text-yellow-400",
        },
        {
            name: "typescript",
            prefix: `const ${homeTranslations.languages}: string[] = [`,
            suffix: "];",
            color: "text-blue-400",
        },
        {
            name: "go",
            prefix: `${homeTranslations.languages} := []string{`,
            suffix: "}",
            color: "text-cyan-400",
        },
        {
            name: "java",
            prefix: `String[] ${homeTranslations.languages} = {`,
            suffix: "};",
            color: "text-orange-400",
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setSyntaxIndex((prev) => (prev + 1) % syntaxes.length);
        }, 2500);
        return () => clearInterval(timer);
    }, [syntaxes.length]);

    const currentSyntax = syntaxes[syntaxIndex];

    const targetLanguages = [
        "PHP",
        "TypeScript",
        "JavaScript",
        "SQL",
        "Java",
        "Python",
    ];

    const displayedLanguages = wakatimeLanguages.filter((l) =>
        targetLanguages.some((t) => t.toLowerCase() === l.name.toLowerCase()),
    );

    const techStacks: {
        label: string;
        items: { name: string; icon: React.ReactNode }[];
        isDynamic?: boolean;
        hasMore?: boolean;
        prefix?: string;
        suffix?: string;
        color?: string;
    }[] = [
        {
            label: homeTranslations.languages,
            items: loading
                ? [{ name: "Loading...", icon: <Code size={14} /> }]
                : displayedLanguages.map((l) => ({ name: l.name, icon: <Code size={14} /> })),
            isDynamic: true,
            hasMore: wakatimeLanguages.length > 5,
        },
        {
            label: homeTranslations.devops,
            items: [
                { name: "Nginx", icon: <Server size={14} /> },
                { name: "Docker", icon: <Cpu size={14} /> },
                { name: "Git", icon: <GitBranch size={14} /> },
                { name: "Apache", icon: <Server size={14} /> },
                { name: "GCP", icon: <Cpu size={14} /> },
                { name: "AWS", icon: <Cpu size={14} /> },
            ],
            prefix: `const ${homeTranslations.devops} = [`,
            suffix: "];",
            color: "text-purple-400",
        },
        {
            label: homeTranslations.systems,
            items: [
                { name: "Linux", icon: <Monitor size={14} /> },
                { name: "Bash", icon: <Terminal size={14} /> },
            ],
            prefix: `${homeTranslations.systems} := []string{`,
            suffix: "}",
            color: "text-green-400",
        },
    ];

    return (
        <div className="flex-1 flex flex-col justify-center items-center md:items-start pl-12 md:pl-40 pr-8 h-full overflow-y-auto py-10">
            <div className="max-w-4xl w-full">
                <div className="mb-2 text-base md:text-lg text-gray-800 dark:text-gray-300 font-bold opacity-60 font-mono">
                    <span className="text-green-500">root@edson-dev</span>:
                    <span className="text-blue-500">~</span>$
                    ./init_portfolio.sh
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                    {homeTranslations.hello}
                    <span className="text-primary">.</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-primary font-medium tracking-wide flex items-center gap-3 flex-wrap">
                    <span className="opacity-70 text-gray-800 dark:text-gray-400">
                        Edson {"// "}
                    </span>
                    <span>{homeTranslations.developer}</span>
                </h2>

                <div className="mt-10 md:mt-12 flex flex-col gap-8">
                    <div className="flex flex-col gap-6 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-mono tracking-wide">
                        {techStacks.map((stack, idx) => {
                            const prefix = stack.isDynamic
                                ? currentSyntax.prefix
                                : stack.prefix;
                            const suffix = stack.isDynamic
                                ? currentSyntax.suffix
                                : stack.suffix;
                            const colorClass = stack.isDynamic
                                ? currentSyntax.color
                                : stack.color || "text-purple-400";

                            return (
                                <div
                                    key={idx}
                                    className="transition-all duration-500"
                                >
                                    <span
                                        className={`${colorClass} transition-colors duration-500 font-bold`}
                                    >
                                        {prefix}
                                    </span>
                                    <div className="flex flex-wrap gap-3 mt-2 pl-4 md:pl-6 mb-2">
                                        {stack.items.map((item, i) => (
                                            <span
                                                key={i}
                                                className="flex gap-1 items-center"
                                            >
                                                <span className="inline-flex items-center px-2 py-1 border border-primary/40 rounded text-primary hover:bg-primary/10 transition-colors cursor-default select-none group">
                                                    <span className="mr-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                                                        {item.icon}
                                                    </span>
                                                    &quot;{item.name}&quot;
                                                </span>
                                                {i < stack.items.length - 1 &&
                                                    ","}
                                            </span>
                                        ))}
                                    </div>
                                    {stack.hasMore && (
                                        <TransitionLink
                                            href="/stats"
                                            className="ml-6 mb-2 flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                                        >
                                            <ChevronDown size={12} /> View More
                                        </TransitionLink>
                                    )}
                                    <span className="text-gray-400 transition-all duration-500 opacity-60">
                                        {suffix}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex items-center text-lg md:text-xl text-gray-800 dark:text-gray-400 font-mono">
                        <span className="mr-3 text-green-500">➜</span>
                        <span className="cursor-blink">
                            {homeTranslations.waiting}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
