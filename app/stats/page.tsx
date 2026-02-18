"use client";

import { Code, Cpu, Edit3 } from "lucide-react";
import Image from "next/image";

import { useLanguage } from "../contexts/LanguageContext";
import { useWakatime } from "../contexts/WakatimeContext";
import { translations } from "../lang";

const getLanguageIcon = (name: string) => {
    const iconMap: { [key: string]: string } = {
        TypeScript: "typescript/typescript-original.svg",
        JavaScript: "javascript/javascript-original.svg",
        HTML: "html5/html5-original.svg",
        CSS: "css3/css3-original.svg",
        Python: "python/python-original.svg",
        Java: "java/java-original.svg",
        "C#": "csharp/csharp-original.svg",
        PHP: "php/php-original.svg",
        Go: "go/go-original.svg",
        Rust: "rust/rust-original.svg",
        React: "react/react-original.svg",
        Vue: "vuejs/vuejs-original.svg",
        Angular: "angularjs/angularjs-original.svg",
        Node: "nodejs/nodejs-original.svg",
        Docker: "docker/docker-original.svg",
        Git: "git/git-original.svg",
        Linux: "linux/linux-original.svg",
        Windows: "windows8/windows8-original.svg",
        Mac: "apple/apple-original.svg",
        Android: "android/android-original.svg",
        Swift: "swift/swift-original.svg",
        Kotlin: "kotlin/kotlin-original.svg",
        Ruby: "ruby/ruby-original.svg",
        Dart: "dart/dart-original.svg",
        Flutter: "flutter/flutter-original.svg",
        MySQL: "mysql/mysql-original.svg",
        PostgreSQL: "postgresql/postgresql-original.svg",
        MongoDB: "mongodb/mongodb-original.svg",
        Redis: "redis/redis-original.svg",
        Nginx: "nginx/nginx-original.svg",
        Apache: "apache/apache-original.svg",
        Bash: "bash/bash-original.svg",
        PowerShell: "powershell/powershell-original.svg",
        JSON: "json/json-original.svg",
        YAML: "yaml/yaml-original.svg",
        Markdown: "markdown/markdown-original.svg",
        Sass: "sass/sass-original.svg",
        Less: "less/less-original-wordmark.svg",
        Tailwind: "tailwindcss/tailwindcss-original.svg",
        Bootstrap: "bootstrap/bootstrap-original.svg",
        GraphQL: "graphql/graphql-plain.svg",
        Next: "nextjs/nextjs-original.svg",
        Nuxt: "nuxtjs/nuxtjs-original.svg",
        Svelte: "svelte/svelte-original.svg",
        Vite: "vitejs/vitejs-original.svg",
        Webpack: "webpack/webpack-original.svg",
        Babel: "babel/babel-original.svg",
        Jest: "jest/jest-plain.svg",
        Mocha: "mocha/mocha-plain.svg",
        Cypress: "cypressio/cypressio-original.svg",
        Selenium: "selenium/selenium-original.svg",
        Puppeteer: "puppeteer/puppeteer-original.svg",
        Electron: "electron/electron-original.svg",
        Figma: "figma/figma-original.svg",
        Sketch: "sketch/sketch-original.svg",
        Photoshop: "photoshop/photoshop-original.svg",
        Illustrator: "illustrator/illustrator-plain.svg",
        Premiere: "premierepro/premierepro-original.svg",
        AfterEffects: "aftereffects/aftereffects-original.svg",
        Unity: "unity/unity-original.svg",
        Unreal: "unrealengine/unrealengine-original.svg",
        Godot: "godot/godot-original.svg",
        Blender: "blender/blender-original.svg",
        Arduino: "arduino/arduino-original.svg",
        RaspberryPi: "raspberrypi/raspberrypi-original.svg",
        Ubuntu: "ubuntu/ubuntu-plain.svg",
        Debian: "debian/debian-plain.svg",
        Fedora: "fedora/fedora-plain.svg",
        CentOS: "centos/centos-plain.svg",
        Arch: "archlinux/archlinux-original.svg",
        Kali: "kalilinux/kalilinux-original.svg",
    };

    const icon =
        iconMap[name] ||
        iconMap[
            Object.keys(iconMap).find((k) =>
                name.toLowerCase().includes(k.toLowerCase()),
            ) || ""
        ];
    return icon
        ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`
        : null;
};

const getEditorIcon = (name: string) => {
    const iconMap: { [key: string]: string } = {
        "VS Code": "vscode/vscode-original.svg",
        "Visual Studio Code": "vscode/vscode-original.svg",
        "Visual Studio": "visualstudio/visualstudio-original.svg",
        IntelliJ: "intellij/intellij-original.svg",
        "IntelliJ IDEA": "intellij/intellij-original.svg",
        PyCharm: "pycharm/pycharm-original.svg",
        WebStorm: "webstorm/webstorm-original.svg",
        PhpStorm: "phpstorm/phpstorm-original.svg",
        Vim: "vim/vim-original.svg",
        Neovim: "vim/vim-original.svg",
        Emacs: "emacs/emacs-original.svg",
        Atom: "atom/atom-original.svg",
        Sublime: "sublimetext/sublimetext-original.svg",
        "Sublime Text": "sublimetext/sublimetext-original.svg",
        Xcode: "xcode/xcode-original.svg",
        AndroidStudio: "androidstudio/androidstudio-original.svg",
        "Android Studio": "androidstudio/androidstudio-original.svg",
        Eclipse: "eclipse/eclipse-original.svg",
        NetBeans: "netbeans/netbeans-original.svg",
        Rider: "rider/rider-original.svg",
        Goland: "go/go-original.svg",
        RStudio: "rstudio/rstudio-original.svg",
        Notepad: "notepaddplusplus/notepaddplusplus-original.svg",
        "Notepad++": "notepaddplusplus/notepaddplusplus-original.svg",
        Terminal: "bash/bash-original.svg",
        Fleet: "jetbrains/jetbrains-original.svg",
        Cursor: "vscode/vscode-original.svg",
        Antigravity: "vscode/vscode-original.svg",
    };

    const icon =
        iconMap[name] ||
        iconMap[
            Object.keys(iconMap).find((k) =>
                name.toLowerCase().includes(k.toLowerCase()),
            ) || ""
        ];
    return icon
        ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`
        : null;
};

const getOSIcon = (name: string) => {
    const iconMap: { [key: string]: string } = {
        Mac: "apple/apple-original.svg",
        macOS: "apple/apple-original.svg",
        Linux: "linux/linux-original.svg",
        Windows: "windows8/windows8-original.svg",
        Ubuntu: "ubuntu/ubuntu-plain.svg",
        Debian: "debian/debian-plain.svg",
        Fedora: "fedora/fedora-plain.svg",
        CentOS: "centos/centos-plain.svg",
        Arch: "archlinux/archlinux-original.svg",
        Kali: "kalilinux/kalilinux-original.svg",
        Android: "android/android-original.svg",
        iOS: "apple/apple-original.svg",
        Chrome: "chrome/chrome-original.svg",
        WSL: "linux/linux-original.svg",
    };

    const icon =
        iconMap[name] ||
        iconMap[
            Object.keys(iconMap).find((k) =>
                name.toLowerCase().includes(k.toLowerCase()),
            ) || ""
        ];
    return icon
        ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`
        : null;
};

export default function Stats() {
    const { lang } = useLanguage();
    const t = translations[lang].stats;

    interface WakatimeStats {
        daily_average: number;
        languages: { name: string; percent: number; text: string }[];
        editors: { name: string; percent: number; text: string }[];
        operating_systems: { name: string; percent: number; text: string }[];
    }
    interface WakatimeAllTime {
        total_seconds: number;
        text: string;
        range: {
            start_date: string;
            start_text: string;
            end_date: string;
            end_text: string;
        };
    }

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
                    <span className="text-blue-500">~</span>$ {t.command}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Top Stats Row */}
                    <div className="col-span-1 lg:col-span-12 flex flex-col md:flex-row gap-6">
                        {/* Total Time */}
                        <div className="bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800 p-6 rounded-md flex-1 backdrop-blur-sm">
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                                {t.total_coding_time}
                            </div>
                            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 font-mono">
                                {loading
                                    ? "..."
                                    : totalTime.hrs.toLocaleString()}{" "}
                                <span className="text-base text-primary mr-2">
                                    {t.hrs}
                                </span>
                                {loading ? "" : totalTime.mins}{" "}
                                <span className="text-base text-primary">
                                    {loading ? "" : t.mins}
                                </span>
                            </div>
                        </div>

                        {/* Daily Average */}
                        <div className="bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800 p-6 rounded-md flex-1 backdrop-blur-sm">
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                                {t.daily_average}
                            </div>
                            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 font-mono">
                                {loading ? "..." : dailyAvg.hrs}{" "}
                                <span className="text-base text-primary">
                                    {t.hrs}
                                </span>{" "}
                                {loading ? "" : dailyAvg.mins}{" "}
                                <span className="text-base text-primary">
                                    {t.mins}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-6 bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800 p-6 rounded-md backdrop-blur-sm">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 flex items-center gap-2 mb-6">
                            <Code className="text-primary" size={20} />
                            {t.top_languages}
                        </h3>
                        <div className="space-y-5">
                            {loading ? (
                                <div className="animate-pulse space-y-4">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                                </div>
                            ) : (
                                stats?.languages?.map(
                                    (lang: {
                                        name: string;
                                        percent: number;
                                        text: string;
                                    }) => {
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
                                    },
                                )
                            )}
                        </div>
                    </div>

                    {/* Editors & OS */}
                    <div className="col-span-1 lg:col-span-6 flex flex-col gap-6">
                        {/* Editors */}
                        <div className="bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800 p-6 rounded-md flex-1 backdrop-blur-sm">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 flex items-center gap-2 mb-6">
                                <Edit3 className="text-primary" size={20} />
                                {t.editors}
                            </h3>
                            <div className="space-y-4">
                                {loading ? (
                                    <div className="animate-pulse space-y-4">
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                                    </div>
                                ) : (
                                    stats?.editors?.map(
                                        (
                                            editor: {
                                                name: string;
                                                percent: number;
                                                text: string;
                                            },
                                            idx: number,
                                        ) => {
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

                        {/* OS */}
                        <div className="bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800 p-6 rounded-md flex-1 backdrop-blur-sm">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 flex items-center gap-2 mb-6">
                                <Cpu className="text-primary" size={20} />
                                {t.operating_systems}
                            </h3>
                            <div className="space-y-4">
                                {loading ? (
                                    <div className="animate-pulse space-y-4">
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                                    </div>
                                ) : (
                                    stats?.operating_systems?.map(
                                        (
                                            os: {
                                                name: string;
                                                percent: number;
                                                text: string;
                                            },
                                            idx: number,
                                        ) => {
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
