/* eslint-disable @stylistic/indent */
"use client";

import { Code, Github, Loader2, LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import TerminalPrompt from "../components/TerminalPrompt";
import { useGithub } from "../contexts/GithubContext";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lang";
import { GithubRepo } from "../types/github";
import { getLanguageIcon } from "../utils/iconHelpers";

interface StackItem {
    label: string;
    icon: React.ReactNode;
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
                    <Github size={24} />
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
                                    className="flex gap-1 items-center px-2 py-1 border border-primary/40 rounded text-primary bg-primary/5 hover:bg-primary/10 transition-colors cursor-default select-none text-xs font-mono"
                                >
                                    <span className="opacity-70">
                                        {tech.icon}
                                    </span>
                                    {tech.label}
                                </span>
                            ))}
                        </div>
                    )}
                    <div className="card-actions flex flex-wrap gap-3 pt-4 border-t border-gray-100 dark:border-gray-800/50 mt-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Link
                            href={project.links?.code || "#"}
                            className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-primary border border-primary hover:bg-primary/10 transition-colors rounded-sm uppercase tracking-wider"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Code size={16} />
                            {t.view_code}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsContent = () => {
    const { lang } = useLanguage();
    const projectsTranslations = translations[lang].projects;
    const [searchQuery, setSearchQuery] = useState("");
    const { repos, loading, error } = useGithub();

    const projects: Project[] = useMemo(() => {
        if (!repos) return [];
        return repos.map((repo: GithubRepo) => ({
            id: repo.id,
            name: repo.name,
            type: "app",
            icon: Github,
            description: repo.description || "No description available",
            stack: repo.languages?.length
                ? repo.languages.map((lang) => {
                      const icon = getLanguageIcon(lang);
                      return {
                          label: lang,
                          icon: icon ? (
                              <Image
                                  src={icon}
                                  alt={lang}
                                  width={14}
                                  height={14}
                                  className="w-3.5 h-3.5 object-contain"
                              />
                          ) : (
                              <Code size={14} />
                          ),
                      };
                  })
                : undefined,
            links: {
                code: repo.html_url,
            },
        }));
    }, [repos]);

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
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <Loader2
                                className="animate-spin text-primary"
                                size={48}
                            />
                        </div>
                    ) : error ? (
                        <div className="text-red-500 text-center p-10 font-mono">
                            Error: {error}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                            {filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    t={projectsTranslations}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function Projects() {
    return <ProjectsContent />;
}
