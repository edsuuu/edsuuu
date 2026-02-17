"use client";

import React, { createContext, useContext } from "react";

type Language = "pt-br" | "en";

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

const getSnapshot = () => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("preferred-language");
    return (saved === "pt-br" || saved === "en" ? saved : "en") as Language;
};

const getServerSnapshot = () => "en" as Language;

const subscribe = (callback: () => void) => {
    window.addEventListener("storage", callback);
    return () => window.removeEventListener("storage", callback);
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const lang = React.useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot,
    );

    const setLang = (newLang: Language) => {
        localStorage.setItem("preferred-language", newLang);
        window.dispatchEvent(new Event("storage"));
    };

    const toggleLanguage = () => {
        const newLang = lang === "pt-br" ? "en" : "pt-br";
        setLang(newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
