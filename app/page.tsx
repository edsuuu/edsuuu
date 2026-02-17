"use client";

// import {
//     Code,
//     Coffee,
//     Cpu,
//     GitBranch,
//     Monitor,
//     Server,
//     Terminal,
// } from "lucide-react";
// import { useEffect, useState } from "react";

import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "./lang";

export default function Home() {
    const { lang } = useLanguage();
    // const [syntaxIndex, setSyntaxIndex] = useState(0);

    const homeTranslations = translations[lang].home;

    // const syntaxes = [
    //     {
    //         name: "php",
    //         prefix: `$${homeTranslations.languages} = [`,
    //         suffix: "];",
    //         color: "text-indigo-400",
    //     },
    //     {
    //         name: "javascript",
    //         prefix: `const ${homeTranslations.languages} = [`,
    //         suffix: "];",
    //         color: "text-yellow-400",
    //     },
    //     {
    //         name: "typescript",
    //         prefix: `const ${homeTranslations.languages}: string[] = [`,
    //         suffix: "];",
    //         color: "text-blue-400",
    //     },
    //     {
    //         name: "go",
    //         prefix: `${homeTranslations.languages} := []string{`,
    //         suffix: "}",
    //         color: "text-cyan-400",
    //     },
    //     {
    //         name: "java",
    //         prefix: `String[] ${homeTranslations.languages} = {`,
    //         suffix: "};",
    //         color: "text-orange-400",
    //     },
    // ];

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setSyntaxIndex((prev) => (prev + 1) % syntaxes.length);
    //     }, 2500);
    //     return () => clearInterval(timer);
    // }, [syntaxes.length]);

    // const currentSyntax = syntaxes[syntaxIndex];

    // const techStacks = [
    //     {
    //         label: homeTranslations.languages,
    //         items: [
    //             { name: "PHP", icon: <Code size={14} /> },
    //             { name: "Java", icon: <Coffee size={14} /> },
    //             { name: "JavaScript", icon: <Code size={14} /> },
    //             { name: "TypeScript", icon: <Code size={14} /> },
    //             { name: "GoLang", icon: <Terminal size={14} /> },
    //         ],
    //         isDynamic: true,
    //     },
    //     {
    //         label: homeTranslations.devops,
    //         items: [
    //             { name: "Nginx", icon: <Server size={14} /> },
    //             { name: "Docker", icon: <Cpu size={14} /> },
    //             { name: "Git", icon: <GitBranch size={14} /> },
    //         ],
    //         prefix: `const ${homeTranslations.devops} = [`,
    //         suffix: "];",
    //         color: "text-purple-400",
    //     },
    //     {
    //         label: homeTranslations.systems,
    //         items: [
    //             { name: "Linux", icon: <Monitor size={14} /> },
    //             { name: "Bash", icon: <Terminal size={14} /> },
    //         ],
    //         prefix: `${homeTranslations.systems} := []string{`,
    //         suffix: "}",
    //         color: "text-green-400",
    //     },
    // ];

    return (
        <div className="flex-1 flex flex-col justify-center items-center md:items-start pl-12 md:pl-40 pr-8 h-full overflow-y-auto py-10">
            <div className="max-w-4xl w-full">
                <div className="mb-2 text-base md:text-lg text-gray-500 font-bold opacity-60 font-mono">
                    <span className="text-green-500">root@edson-dev</span>:
                    <span className="text-blue-500">~</span>$
                    ./init_portfolio.sh
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                    {homeTranslations.hello}
                    <span className="text-primary">.</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-primary font-medium tracking-wide flex items-center gap-3 flex-wrap">
                    <span className="opacity-70 text-gray-600 dark:text-gray-400">
                        Edson {"// "}
                    </span>
                    <span>{homeTranslations.developer}</span>
                </h2>

                <div className="mt-10 md:mt-12 flex flex-col gap-8">
                    <div className="flex items-center text-lg md:text-xl text-gray-400 font-mono">
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
