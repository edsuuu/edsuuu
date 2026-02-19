"use client";

import {
    AtSign,
    BarChart,
    Home,
    Languages,
    Moon,
    Sun,
    Terminal,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import * as React from "react";

import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../lang";
import TransitionLink from "../transition/TransitionLink";

const Sidebar = ({
    className,
    onClose,
    isMobile,
}: {
    className?: string;
    onClose?: () => void;
    isMobile?: boolean;
}) => {
    const { setTheme, resolvedTheme } = useTheme();
    const { lang, toggleLanguage } = useLanguage();
    const mounted = React.useSyncExternalStore(
        () => () => {},
        () => true,
        () => false,
    );
    const pathname = usePathname();

    const sidebarTranslations = translations[lang].sidebar;

    const toggleDarkMode = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    if (!mounted && !isMobile) {
        return (
            <aside
                className={`border-r border-gray-200 dark:border-gray-800 flex flex-col py-10 bg-white dark:bg-background z-20 transition-colors duration-300 ${isMobile ? "relative w-72 items-start h-full" : "fixed h-full w-16 md:w-16 items-center"} ${className}`}
            >
                <nav
                    className={`flex-1 flex flex-col gap-8 w-full mt-20 ${isMobile ? "px-4" : "items-center"}`}
                >
                    <div className="w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                    <div className="w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                    <div className="w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                </nav>
            </aside>
        );
    }

    return (
        <aside
            className={`border-r border-gray-200 dark:border-gray-800 flex flex-col py-10 bg-white dark:bg-background z-20 transition-colors duration-300 ${isMobile ? "relative w-72 items-start h-full" : "fixed h-full w-16 md:w-16 items-center"} ${className}`}
        >
            <nav
                className={`flex-1 flex flex-col gap-4 w-full mt-20 ${isMobile ? "px-4" : "items-center"}`}
            >
                <NavLink
                    href="/"
                    icon={<Home size={24} />}
                    label={sidebarTranslations.home}
                    isActive={pathname === "/"}
                    onClick={onClose}
                    isMobile={isMobile}
                />
                <NavLink
                    href="/stats"
                    icon={<BarChart size={24} />}
                    label={sidebarTranslations.stats}
                    isActive={pathname === "/stats"}
                    onClick={onClose}
                    isMobile={isMobile}
                />
                <NavLink
                    href="/projects"
                    icon={<Terminal size={24} />}
                    label={sidebarTranslations.projects}
                    isActive={pathname === "/projects"}
                    onClick={onClose}
                    isMobile={isMobile}
                />
                <NavLink
                    href="/contact"
                    icon={<AtSign size={24} />}
                    label={sidebarTranslations.contact}
                    isActive={pathname === "/contact"}
                    onClick={onClose}
                    isMobile={isMobile}
                />
            </nav>

            <div
                className={`mt-auto flex flex-col gap-4 mb-4 ${isMobile ? "w-full px-4" : ""}`}
            >
                <button
                    onClick={toggleLanguage}
                    className={`group relative flex items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer ${isMobile ? "justify-start gap-4 w-full" : "justify-center"}`}
                >
                    <Languages
                        size={20}
                        className="text-gray-400 group-hover:text-primary transition-colors shrink-0"
                    />

                    {isMobile ? (
                        <span className="text-gray-500 dark:text-gray-400 font-mono text-sm group-hover:text-primary transition-colors truncate">
                            {sidebarTranslations.lang}
                        </span>
                    ) : (
                        <div className="absolute left-full ml-4 bg-gray-900 dark:bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-700 z-50">
                            {sidebarTranslations.lang}
                        </div>
                    )}

                    {!isMobile && (
                        <span className="absolute -top-1 -right-1 text-[8px] font-bold text-primary bg-gray-100 dark:bg-gray-800 px-1 rounded shadow-sm">
                            {lang.toUpperCase()}
                        </span>
                    )}
                    {isMobile && (
                        <span className="ml-auto text-[10px] font-bold text-primary bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded shadow-sm shrink-0">
                            {lang.toUpperCase()}
                        </span>
                    )}
                </button>

                <button
                    onClick={toggleDarkMode}
                    className={`group relative flex items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer ${isMobile ? "justify-start gap-4 w-full" : "justify-center"}`}
                >
                    {resolvedTheme === "dark" ? (
                        <Sun
                            size={20}
                            className="text-gray-400 group-hover:text-primary transition-colors"
                        />
                    ) : (
                        <Moon
                            size={20}
                            className="text-gray-400 group-hover:text-primary transition-colors"
                        />
                    )}

                    {isMobile ? (
                        <span className="text-gray-500 font-mono text-sm group-hover:text-primary transition-colors">
                            {resolvedTheme === "dark"
                                ? sidebarTranslations.theme_light
                                : sidebarTranslations.theme_dark}
                        </span>
                    ) : (
                        <div className="absolute left-full ml-4 bg-gray-900 dark:bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-700 z-50">
                            {resolvedTheme === "dark"
                                ? sidebarTranslations.theme_light
                                : sidebarTranslations.theme_dark}
                        </div>
                    )}
                </button>
            </div>
        </aside>
    );
};

const NavLink = ({
    href,
    icon,
    label,
    isActive,
    onClick,
    isMobile,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick?: () => void;
    isMobile?: boolean;
}) => {
    return (
        <TransitionLink
            href={href}
            onClick={onClick}
            className={`group relative flex items-center p-3 rounded-md transition-all duration-300 cursor-pointer ${isActive ? "bg-gray-100 dark:bg-gray-800 text-primary" : "hover:bg-gray-100 dark:hover:bg-gray-800"} ${isMobile ? "justify-start gap-4 w-full" : "justify-center"}`}
        >
            <div
                className={`transition-colors ${isActive ? "text-primary" : "text-gray-400 group-hover:text-primary"}`}
            >
                {icon}
            </div>

            {isMobile ? (
                <span
                    className={`font-mono text-sm ${isActive ? "font-bold" : "text-gray-500 group-hover:text-primary"}`}
                >
                    {label}
                </span>
            ) : (
                <div className="absolute left-full ml-4 bg-gray-900 dark:bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-700 z-50">
                    {label}
                </div>
            )}
        </TransitionLink>
    );
};

export default Sidebar;
