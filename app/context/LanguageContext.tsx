"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "pt-br" | "en";

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [lang, setLangState] = useState<Language>("en");

    useEffect(() => {
        const savedLang = localStorage.getItem(
            "preferred-language",
        ) as Language;
        if (savedLang && (savedLang === "pt-br" || savedLang === "en")) {
            setLangState(savedLang);
        }
    }, []);

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem("preferred-language", newLang);
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
