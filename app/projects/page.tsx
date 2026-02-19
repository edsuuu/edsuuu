"use client";

import {
    Code,
    Database,
    FileCode,
    LucideIcon,
    Play,
    Terminal as TerminalIcon,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import TerminalPrompt from "../components/TerminalPrompt";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lang";

interface StackItem {
    label: string;
}

interface ProjectLinks {
    code?: string;
    demo?: string;
}

interface Project {
    id: string;
    name: string;
    type: string;
    icon: LucideIcon;
    description: string;
    stack?: StackItem[];
    links: ProjectLinks;
}

const ProjectCard = ({
    project,
    t,
}: {
    project: Project;
    t: Record<string, string>;
}) => {
    return (
        <div className="group relative cursor-pointer border-l-4 border-transparent hover:border-primary bg-white/60 dark:bg-surface-dark/40 p-6 border-y border-y-gray-200 dark:border-y-gray-800 hover:bg-white dark:hover:bg-surface-dark transition-all w-full shadow-sm hover:shadow-md hover:shadow-primary/5">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="mt-1 text-gray-400 group-hover:text-primary transition-colors shrink-0">
                    {project.icon ? (
                        <project.icon size={24} />
                    ) : (
                        <Code size={24} />
                    )}
                </div>
                <div className="flex-1 w-full">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-xl text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors font-display">
                            {project.name}
                        </h3>
                        <span className="text-[10px] font-mono text-gray-400 border border-gray-200 dark:border-gray-800 px-2 py-0.5 rounded">
                            ID: #{project.id}
                        </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-mono mb-4 leading-relaxed">
                        {project.description ||
                            "No description available for this project."}
                    </div>
                    {project.stack && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.stack.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="text-[10px] px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded font-mono border border-gray-200 dark:border-gray-700 uppercase"
                                >
                                    {tech.label}
                                </span>
                            ))}
                        </div>
                    )}
                    <div className="card-actions flex flex-wrap gap-3 pt-4 border-t border-gray-100 dark:border-gray-800/50 mt-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Link
                            href={project.links?.code || "#"}
                            className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-primary border border-primary hover:bg-primary/10 transition-colors rounded-sm uppercase tracking-wider"
                        >
                            <Code size={16} />
                            {t.view_code}
                        </Link>
                        {project.links?.demo && (
                            <Link
                                href={project.links.demo}
                                className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-white bg-primary hover:bg-primary/90 transition-colors rounded-sm uppercase tracking-wider border border-primary shadow-[0_0_10px_rgba(0,164,239,0.3)]"
                            >
                                <Play size={16} />
                                {t.live_demo}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Projects() {
    const { lang } = useLanguage();
    const projectsTranslations = translations[lang].projects;
    const [searchQuery, setSearchQuery] = useState("");

    const projects = useMemo(
        () => [
            {
                id: "001",
                name: "nexus_cloud",
                type: "app",
                icon: Database,
                description:
                    "Distributed infrastructure management platform designed for scaling microservices architecture with minimal overhead.",
                stack: [{ label: "Docker" }, { label: "K8s" }, { label: "Go" }],
                links: { code: "#", demo: "#" },
            },
            {
                id: "002",
                name: "laravel-ecommerce",
                type: "app",
                icon: TerminalIcon,
                description: projectsTranslations.description,
                stack: [
                    { label: "PHP 8.2" },
                    { label: "Laravel 10" },
                    { label: "React" },
                    { label: "MySQL" },
                ],
                links: { code: "#", demo: "#" },
            },
            {
                id: "003",
                name: "void_terminal",
                type: "app",
                icon: FileCode,
                description:
                    "Web-based CLI for remote server management. Fully responsive with WebSocket integration.",
                stack: [
                    { label: "NodeJS" },
                    { label: "Socket.io" },
                    { label: "xterm.js" },
                ],
                links: { code: "#", demo: "#" },
            },
            {
                id: "004",
                name: "finance-dashboard",
                type: "file",
                icon: FileCode,
                description:
                    "Real-time financial data visualization dashboard with predictive analytics.",
                stack: [
                    { label: "TypeScript" },
                    { label: "Next.js" },
                    { label: "Tremor" },
                ],
                links: { code: "#" },
            },
        ],
        [projectsTranslations],
    );

    const filteredProjects = projects.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden mt-5">
            <div className="p-6 md:p-10 pb-0">
                <div className="max-w-7xl mx-auto w-full">
                    <TerminalPrompt
                        user="root"
                        host="edson-dev"
                        path="~/projects"
                        command="ls -la | grep"
                        className="mb-0"
                    >

                        <div className="flex-1 min-w-50 relative flex items-center">
                            <input
                                className="bg-transparent border-none border-b border-blue-500 p-0 text-gray-800 dark:text-gray-100 focus:ring-0 placeholder-gray-500/50 font-bold w-full outline-none ml-2 caret-gray-900 dark:caret-white"
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={
                                    projectsTranslations.search_placeholder
                                }
                                autoFocus
                            />
                        </div>
                    </TerminalPrompt>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-0 no-scrollbar w-full">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                t={projectsTranslations}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
