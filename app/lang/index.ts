import { en } from "./en";
import { ptBR } from "./pt-br";

export const translations = {
    "pt-br": ptBR,
    en: {
        ...en,
        stats: {
            ...(en.stats || {}),
            data_source: "Data fetched from WakaTime API",
            view_profile: "View Profile",
        },
        projects: {
            ...(en.projects || {}),
        },
    },
};
