"use client";

import { Code, Cpu, Edit3 } from "lucide-react";
import Image from "next/image";

import { useLanguage } from "../contexts/LanguageContext";
import { useWakatime } from "../contexts/WakatimeContext";
import { translations as translationData } from "../lang";
import { WakatimeAllTime, WakatimeStats } from "../types/wakatime";
import {
    getEditorIcon,
    getLanguageIcon,
    getOSIcon,
} from "../utils/iconHelpers";

export default function Stats() {
    const { lang } = useLanguage();
    const translations = translationData[lang].stats;

    // State for API data
    const { data: wakatimeData, loading } = useWakatime();

    const stats = (wakatimeData?.stats as unknown as WakatimeStats) || null;
    const allTime =
        (wakatimeData?.all_time as unknown as WakatimeAllTime) || null;

    // Helper functions for formatting
    const formatDuration = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        return { hrs, mins };
    };

    const totalTime = allTime
        ? formatDuration(allTime.total_seconds)
        : { hrs: 0, mins: 0 };
    const dailyAvg = stats
        ? formatDuration(stats.daily_average)
        : { hrs: 0, mins: 0 };

    return (
        <div className="flex-1 flex flex-col pl-4 md:pl-10 overflow-y-auto w-full h-full relative">
            <div className="digital-grid absolute inset-0 pointer-events-none z-0 opacity-20 dark:opacity-30"></div>

            <div className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full z-10 relative">
                <div className="mb-2 text-base md:text-lg text-gray-800 dark:text-gray-300 font-bold opacity-60 font-mono">
                    <span className="text-green-500">root@edson-dev</span>:
                    <span className="text-blue-500">~</span>${" "}
                    {translations.command}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Top Stats Row */}
                    <div className="col-span-1 lg:col-span-12 flex flex-col md:flex-row gap-6">
                        {/* Total Time */}
                        <div className="bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800 p-6 rounded-md flex-1">
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                                {translations.total_coding_time}
                            </div>
                            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 font-mono">
                                {loading
                                    ? "..."
                                    : totalTime.hrs.toLocaleString()}{" "}
                                <span className="text-base text-primary mr-2">
                                    {translations.hrs}
                                </span>
                                {loading ? "" : totalTime.mins}{" "}
                                <span className="text-base text-primary">
                                    {loading ? "" : translations.mins}
                                </span>
                            </div>
                        </div>

                        {/* Daily Average */}
                        <div className="bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800 p-6 rounded-md flex-1">
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                                {translations.daily_average}
                            </div>
                            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 font-mono">
                                {loading ? "..." : dailyAvg.hrs}{" "}
                                <span className="text-base text-primary">
                                    {translations.hrs}
                                </span>{" "}
                                {loading ? "" : dailyAvg.mins}{" "}
                                <span className="text-base text-primary">
                                    {translations.mins}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-6 bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800 p-6 rounded-md">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 flex items-center gap-2 mb-6">
                            <Code className="text-primary" size={20} />
                            {translations.top_languages}
                        </h3>
                        <div className="space-y-5">
                            {loading ? (
                                <div className="animate-pulse space-y-4">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                                </div>
                            ) : (
                                stats?.languages?.map((lang) => {
                                    const icon = getLanguageIcon(lang.name);
                                    return (
                                        <div key={lang.name}>
                                            <div className="flex justify-between text-xs font-mono mb-1.5 items-end">
                                                <div className="flex items-center gap-2">
                                                    {icon ? (
                                                        <Image
                                                            src={icon}
                                                            alt={lang.name}
                                                            width={16}
                                                            height={16}
                                                            className="w-4 h-4 object-contain"
                                                        />
                                                    ) : (
                                                        <Code className="w-4 h-4 text-gray-400" />
                                                    )}
                                                    <span className="text-gray-700 dark:text-gray-300">
                                                        {lang.name}
                                                    </span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <span className="text-gray-500">
                                                        {lang.text}
                                                    </span>
                                                    <span className="text-gray-500">
                                                        {lang.percent}%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                                                <div
                                                    className={`bg-primary h-2 rounded-full`}
                                                    style={{
                                                        width: `${lang.percent}%`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>

                    {/* Editors & OS */}
                    <div className="col-span-1 lg:col-span-6 flex flex-col gap-6">
                        {/* Editors */}
                        <div className="bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800 p-6 rounded-md flex-1">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 flex items-center gap-2 mb-6">
                                <Edit3 className="text-primary" size={20} />
                                {translations.editors}
                            </h3>
                            <div className="space-y-4">
                                {loading ? (
                                    <div className="animate-pulse space-y-4">
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                                    </div>
                                ) : (
                                    stats?.editors?.map(
                                        (editor, idx: number) => {
                                            const icon = getEditorIcon(
                                                editor.name,
                                            );
                                            return (
                                                <div key={editor.name}>
                                                    <div className="flex justify-between text-xs font-mono mb-1.5 items-end">
                                                        <div className="flex items-center gap-2">
                                                            {icon ? (
                                                                <Image
                                                                    src={icon}
                                                                    alt={
                                                                        editor.name
                                                                    }
                                                                    width={16}
                                                                    height={16}
                                                                    className="w-4 h-4 object-contain"
                                                                />
                                                            ) : (
                                                                <Edit3 className="w-4 h-4 text-gray-400" />
                                                            )}
                                                            <span className="text-gray-700 dark:text-gray-300">
                                                                {editor.name}
                                                            </span>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <span className="text-gray-500">
                                                                {editor.text}
                                                            </span>
                                                            <span className="text-gray-500">
                                                                {editor.percent}
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
                                                        <div
                                                            className={`h-1.5 rounded-full ${idx === 0 ? "bg-purple-500" : idx === 1 ? "bg-blue-500" : "bg-green-500"}`}
                                                            style={{
                                                                width: `${editor.percent}%`,
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            );
                                        },
                                    )
                                )}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800 p-6 rounded-md flex-1">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 flex items-center gap-2 mb-6">
                                <Cpu className="text-primary" size={20} />
                                {translations.operating_systems}
                            </h3>
                            <div className="space-y-4">
                                {loading ? (
                                    <div className="animate-pulse space-y-4">
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                                    </div>
                                ) : (
                                    stats?.operating_systems?.map(
                                        (os, idx: number) => {
                                            const icon = getOSIcon(os.name);
                                            const shouldInvert = [
                                                "Mac",
                                                "macOS",
                                                "iOS",
                                            ].some((k) => os.name.includes(k));
                                            return (
                                                <div key={os.name}>
                                                    <div className="flex justify-between text-xs font-mono mb-1.5 items-end">
                                                        <div className="flex items-center gap-2">
                                                            {icon ? (
                                                                <Image
                                                                    src={icon}
                                                                    alt={
                                                                        os.name
                                                                    }
                                                                    width={16}
                                                                    height={16}
                                                                    className={`w-4 h-4 object-contain ${shouldInvert ? "dark:invert" : ""}`}
                                                                />
                                                            ) : (
                                                                <Cpu className="w-4 h-4 text-gray-400" />
                                                            )}
                                                            <span className="text-gray-700 dark:text-gray-300">
                                                                {os.name}
                                                            </span>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <span className="text-gray-500">
                                                                {os.text}
                                                            </span>
                                                            <span className="text-gray-500">
                                                                {os.percent}%
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
                                                        <div
                                                            className={`h-1.5 rounded-full ${idx === 0 ? "bg-yellow-500" : idx === 1 ? "bg-orange-500" : "bg-blue-400"}`}
                                                            style={{
                                                                width: `${os.percent}%`,
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            );
                                        },
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
