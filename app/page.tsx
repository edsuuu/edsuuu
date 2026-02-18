"use client";

import {
    ChevronDown,
    Code,
    Cpu,
    GitBranch,
    Monitor,
    Server,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useLanguage } from "./contexts/LanguageContext";
import { useWakatime } from "./contexts/WakatimeContext";
import { translations as translationData } from "./lang";
import TransitionLink from "./transition/TransitionLink";
import { WakatimeStats } from "./types/wakatime";
import { getLanguageIcon, getOSIcon } from "./utils/iconHelpers";

export default function Home() {
    const { lang } = useLanguage();
    const { data, loading } = useWakatime();
    const [syntaxIndex, setSyntaxIndex] = useState(0);

    const stats = (data?.stats as unknown as WakatimeStats) || null;
    const wakatimeLanguages = stats?.languages || [];
    const wakatimeSystems = stats?.operating_systems || [];

    const translations = translationData[lang].home;

    const syntaxes = [
        {
            name: "php",
            keyword: "",
            variable: "$" + translations.languages,
            assignment: " = [",
            suffix: "];",
            color: "text-indigo-400",
            assignmentColor: "text-gray-600 dark:text-gray-400",
            variableColor: "text-indigo-400",
        },
        {
            name: "javascript",
            keyword: "const ",
            variable: translations.languages,
            assignment: " = [",
            suffix: "];",
            color: "text-purple-400",
            assignmentColor: "text-blue-500",
            variableColor: "text-yellow-600 dark:text-yellow-300",
        },
        {
            name: "typescript",
            keyword: "const ",
            variable: translations.languages,
            assignment: ": string[] = [",
            suffix: "];",
            color: "text-blue-400",
            assignmentColor: "text-blue-500",
            variableColor: "text-yellow-600 dark:text-yellow-300",
        },
        {
            name: "go",
            keyword: "",
            variable: translations.languages,
            assignment: " := []string{",
            suffix: "}",
            color: "text-cyan-400",
            assignmentColor: "text-gray-600 dark:text-gray-400",
            variableColor: "text-gray-600 dark:text-gray-100",
        },
        {
            name: "java",
            keyword: "String[] ",
            variable: translations.languages,
            assignment: " = {",
            suffix: "};",
            color: "text-orange-400",
            assignmentColor: "text-gray-600 dark:text-gray-400",
            variableColor: "text-gray-600 dark:text-gray-100",
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

    const devOpsTools = [
        { name: "Apache", icon: <Server size={14} /> },
        { name: "AWS", icon: <Cpu size={14} /> },
        { name: "Docker", icon: <Cpu size={14} /> },
        { name: "GCP", icon: <Cpu size={14} /> },
        { name: "Git", icon: <GitBranch size={14} /> },
        { name: "Nginx", icon: <Server size={14} /> },
    ];

    const techStacks: {
        label: string;
        items: { name: string; icon: React.ReactNode }[];
        isDynamic?: boolean;
        hasMore?: boolean;
        syntax?: {
            name?: string;
            keyword: string;
            variable: string;
            assignment: string;
            suffix: string;
            color: string;
            assignmentColor?: string;
            variableColor?: string;
        };
    }[] = [
        {
            label: translations.languages,
            items: loading
                ? [{ name: "Loading...", icon: <Code size={14} /> }]
                : displayedLanguages.map((l) => {
                    const icon = getLanguageIcon(l.name);
                    return {
                        name: l.name,
                        icon: icon ? (
                            <Image
                                src={icon}
                                alt={l.name}
                                width={14}
                                height={14}
                                className="w-3.5 h-3.5 object-contain"
                            />
                        ) : (
                            <Code size={14} />
                        ),
                    };
                }),
            isDynamic: true,
            hasMore: wakatimeLanguages.length > 5,
        },
        {
            label: translations.devops,
            items: devOpsTools,
            isDynamic: true,
        },
        {
            label: translations.systems,
            items: loading
                ? [{ name: "Loading...", icon: <Monitor size={14} /> }]
                : wakatimeSystems
                    .filter((os) => !os.name.toLowerCase().includes("wsl"))
                    .map((os) => {
                        const icon = getOSIcon(os.name);
                        const shouldInvert = ["Mac", "macOS", "iOS"].some(
                            (k) => os.name.includes(k),
                        );
                        return {
                            name: os.name,
                            icon: icon ? (
                                <Image
                                    src={icon}
                                    alt={os.name}
                                    width={14}
                                    height={14}
                                    className={`w-3.5 h-3.5 object-contain ${shouldInvert ? "dark:invert" : ""}`}
                                />
                            ) : (
                                <Cpu size={14} />
                            ),
                        };
                    }),
            isDynamic: true,
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
                    {translations.hello}
                    <span className="text-primary">.</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-primary font-medium tracking-wide flex items-center gap-3 flex-wrap">
                    <span className="opacity-70 text-gray-800 dark:text-gray-400">
                        Edson {"// "}
                    </span>
                    <span>{translations.developer}</span>
                </h2>

                <div className="mt-10 md:mt-12 flex flex-col gap-8">
                    <div className="flex flex-col gap-6 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-mono tracking-wide">
                        {techStacks.map((stack, idx) => {
                            const syntax = stack.isDynamic
                                ? currentSyntax
                                : stack.syntax!;

                            // Fallback for types if syntax is undefined (though it shouldn't be based on logic)
                            const keyword = syntax?.keyword || "";

                            // Handle variable name
                            let displayVariable = syntax?.variable || "";

                            if (stack.isDynamic) {
                                displayVariable = stack.label;
                                // PHP special case for dynamic items
                                if (syntax.name === "php") {
                                    displayVariable = `$${displayVariable}`;
                                }
                            }

                            const assignment = syntax?.assignment || "";
                            const suffix = syntax?.suffix || "";
                            const colorClass =
                                syntax?.color || "text-purple-400"; // declaration color
                            const assignmentColor =
                                syntax?.assignmentColor ||
                                "text-gray-600 dark:text-gray-400";
                            const variableColor =
                                syntax?.variableColor ||
                                "text-yellow-500 dark:text-yellow-300";

                            return (
                                <div
                                    key={idx}
                                    className="transition-all duration-500"
                                >
                                    <div className="transition-all duration-500">
                                        <span
                                            className={`${colorClass} font-bold transition-colors duration-500`}
                                        >
                                            {keyword}
                                        </span>
                                        <span
                                            className={`${variableColor} font-bold transition-colors duration-500`}
                                        >
                                            {displayVariable}
                                        </span>
                                        <span
                                            className={`${assignmentColor} transition-colors duration-500`}
                                        >
                                            {assignment}
                                        </span>
                                    </div>

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
                                            <ChevronDown size={12} />{" "}
                                            {translations.view_more}
                                        </TransitionLink>
                                    )}
                                    <span
                                        className={`${assignmentColor} transition-all duration-500`}
                                    >
                                        {suffix}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex items-center text-lg md:text-xl text-gray-800 dark:text-gray-400 font-mono">
                        <span className="mr-3 text-green-500">➜</span>
                        <span className="cursor-blink">
                            {translations.waiting}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
