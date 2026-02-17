"use client";

import { useMemo } from "react";
import {
    Folder,
    FileCode,
    Layers,
    Code,
    Database,
    File,
    Terminal as TerminalIcon,
} from "lucide-react";
import Link from "next/link";

import { translations } from "../lang";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
    const { lang } = useLanguage();

    const projectsTranslations = translations[lang].projects;

    const projects = useMemo(
        () => [
            {
                id: "finance-dashboard",
                name: "finance-dashboard-v2.ts",
                type: "file",
                permissions: "-rwxr-xr-x",
                owner: "edson",
                group: "staff",
                date: "Feb 10 14:00",
                icon: FileCode,
                color: "text-gray-400 hover:text-primary",
            },
            {
                id: "ai-image-gen",
                name: "ai-image-gen.py",
                type: "file",
                permissions: "-rw-r--r--",
                owner: "edson",
                group: "staff",
                date: "Jan 22 09:30",
                icon: File,
                color: "text-gray-400 hover:text-primary",
            },
            {
                id: "laravel-ecommerce",
                name: "laravel-ecommerce.app",
                type: "app",
                permissions: "-rwxr-xr-x",
                owner: "edson",
                group: "staff",
                date: "Feb 15 11:20",
                icon: TerminalIcon,
                color: "text-primary font-bold",
                isHead: true,
                description: projectsTranslations.description,
                stack: [
                    { icon: FileCode, label: "PHP 8.2" },
                    { icon: Layers, label: "Laravel 10" },
                    { icon: Code, label: "React Frontend" },
                    { icon: Database, label: "MySQL" },
                ],
                links: {
                    code: "#",
                    demo: "#",
                },
            },
            {
                id: "social-network",
                name: "social-network-api.go",
                type: "file",
                permissions: "-rwxr-xr-x",
                owner: "edson",
                group: "staff",
                date: "Dec 05 18:45",
                icon: FileCode,
                color: "text-gray-400 hover:text-primary",
            },
        ],
        [lang],
    );

    return (
        <div className="flex-1 p-4 md:p-10 flex flex-col overflow-y-auto h-full text-gray-800 dark:text-gray-200">
            <div className="w-full max-w-[1600px] mx-auto border border-gray-300 dark:border-gray-800 rounded-lg shadow-2xl bg-white dark:bg-terminal-bg flex flex-col overflow-hidden text-base md:text-lg h-full max-h-[90vh]">
                <div className="bg-gray-100 dark:bg-terminal-header border-b border-gray-300 dark:border-gray-800 px-6 py-3 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-red-500"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-yellow-500"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-gray-500 font-medium font-mono">
                        projects.sh — bash — 120x40
                    </div>
                    <div className="w-10"></div>
                </div>

                <div className="p-8 font-mono text-gray-700 dark:text-gray-300 flex-1 overflow-y-auto">
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                        <span className="text-green-600 dark:text-green-500 font-bold">
                            edson@portfolio
                        </span>
                        <span className="text-gray-400 dark:text-gray-500">
                            :
                        </span>
                        <span className="text-blue-600 dark:text-blue-500 font-bold">
                            ~/projects
                        </span>
                        <span className="text-gray-400 dark:text-gray-500">
                            $
                        </span>
                        <span className="text-gray-900 dark:text-white">
                            ls -la
                        </span>
                    </div>

                    <div className="grid grid-cols-[auto_auto_auto_auto_1fr] gap-x-8 md:gap-x-16 gap-y-3 mb-10 text-sm md:text-base whitespace-nowrap">
                        <div className="text-gray-400">drwxr-xr-x</div>{" "}
                        <div className="text-gray-500">2</div>{" "}
                        <div className="text-gray-400">edson</div>{" "}
                        <div className="text-gray-500">staff</div>{" "}
                        <div className="text-blue-500 dark:text-blue-400">
                            .
                        </div>
                        <div className="text-gray-400">drwxr-xr-x</div>{" "}
                        <div className="text-gray-500">5</div>{" "}
                        <div className="text-gray-400">edson</div>{" "}
                        <div className="text-gray-500">staff</div>{" "}
                        <div className="text-blue-500 dark:text-blue-400">
                            ..
                        </div>
                        {projects.map((project) => (
                            <div key={project.id} className="contents group">
                                <div
                                    className={`font-mono ${project.name === "laravel-ecommerce.app" ? "text-primary font-bold" : "text-gray-400"}`}
                                >
                                    {project.permissions}
                                </div>
                                <div className="text-gray-500">1</div>
                                <div
                                    className={`${project.name === "laravel-ecommerce.app" ? "text-primary font-bold" : "text-gray-400"}`}
                                >
                                    {project.owner}
                                </div>
                                <div className="text-gray-500">
                                    {project.group}
                                </div>
                                <div
                                    className={`cursor-pointer transition-colors flex items-center gap-3 ${project.color}`}
                                >
                                    {project.name}
                                    {project.isHead && (
                                        <span className="text-gray-500 font-normal ml-4 text-xs">
                                            {"<-- HEAD"}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="text-green-600 dark:text-green-500 font-bold">
                            edson@portfolio
                        </span>
                        <span className="text-gray-400 dark:text-gray-500">
                            :
                        </span>
                        <span className="text-blue-600 dark:text-blue-500 font-bold">
                            ~/projects
                        </span>
                        <span className="text-gray-400 dark:text-gray-500">
                            $
                        </span>
                        <span className="text-gray-900 dark:text-white">
                            {projectsTranslations.view_project}{" "}
                            laravel-ecommerce.app
                        </span>
                    </div>

                    {projects.map(
                        (project) =>
                            project.description && (
                                <div
                                    key={`details-${project.id}`}
                                    className="border-l-2 border-primary pl-4 ml-1 md:ml-4 py-2 mb-8 animate-fade-in"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 font-display">
                                        {project.name ===
                                        "laravel-ecommerce.app"
                                            ? projectsTranslations.title
                                            : project.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-2xl leading-relaxed">
                                        {project.description}
                                    </p>

                                    {project.stack && (
                                        <div className="flex flex-wrap gap-4 mb-6 text-xs uppercase tracking-wider font-bold text-gray-500">
                                            {project.stack.map((tech, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-2"
                                                >
                                                    <tech.icon size={14} />
                                                    <span>{tech.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex gap-4 font-mono text-sm">
                                        <Link
                                            href={project.links?.code || "#"}
                                            className="text-primary hover:text-gray-900 dark:hover:text-white hover:underline decoration-primary underline-offset-4 transition-all"
                                        >
                                            {projectsTranslations.view_code}
                                        </Link>
                                        <Link
                                            href={project.links?.demo || "#"}
                                            className="text-primary hover:text-gray-900 dark:hover:text-white hover:underline decoration-primary underline-offset-4 transition-all"
                                        >
                                            {projectsTranslations.live_demo}
                                        </Link>
                                    </div>
                                </div>
                            ),
                    )}

                    <div className="flex items-center gap-2 mt-4">
                        <span className="text-green-600 dark:text-green-500 font-bold">
                            edson@portfolio
                        </span>
                        <span className="text-gray-400 dark:text-gray-500">
                            :
                        </span>
                        <span className="text-blue-600 dark:text-blue-500 font-bold">
                            ~/projects
                        </span>
                        <span className="text-gray-400 dark:text-gray-500">
                            $
                        </span>
                        <span className="cursor-blink"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
