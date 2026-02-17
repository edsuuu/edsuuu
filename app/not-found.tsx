"use client";

import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "./lang";

export default function NotFound() {
    const { lang } = useLanguage();
    const notFoundTranslations = translations[lang].notFound;

    return (
        <div className="flex-1 flex flex-col justify-center items-center md:items-start pl-12 md:pl-40 pr-8 h-full overflow-y-auto py-10 relative">
            <div className="w-full">
                <div className="mb-2 text-base md:text-lg text-gray-500 font-bold opacity-60 font-mono">
                    <span className="text-green-500">root@edson-dev</span>:
                    <span className="text-primary">~</span>$ ./check_route.sh
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-gray-900 dark:text-white mb-8 font-mono">
                    {notFoundTranslations.title}
                    <span className="text-primary">.</span>
                </h1>
                <div className="border-l-2 border-error-red/50 pl-6 py-4 my-12 bg-error-red/5 dark:bg-error-red/10 max-w-2xl">
                    <p className="text-error-red font-mono text-sm md:text-base leading-relaxed">
                        <span className="font-bold">
                            {notFoundTranslations.critical_error}
                        </span>{" "}
                        {notFoundTranslations.message}
                    </p>
                </div>
                <div className="flex items-center text-base md:text-lg text-gray-500 dark:text-gray-400 font-mono">
                    <span className="mr-3 text-green-500">➜</span>
                    <span className="cursor-blink">
                        {notFoundTranslations.waiting}
                    </span>
                </div>
            </div>
            <footer className="fixed bottom-0 left-0 w-full h-8 bg-white/80 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-900 z-20 flex items-center justify-between px-4 md:pl-24 text-[10px] uppercase tracking-widest text-gray-500 font-mono">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        {notFoundTranslations.online}
                    </span>
                    <span className="hidden md:inline">
                        {notFoundTranslations.latency}
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <span>{notFoundTranslations.utf8}</span>
                    <span>{notFoundTranslations.err_void}</span>
                    <span>{notFoundTranslations.ln_col}</span>
                </div>
            </footer>
        </div>
    );
}
