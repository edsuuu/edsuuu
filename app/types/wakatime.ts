export interface WakatimeLanguage {
    name: string;
    total_seconds: number;
    percent: number;
    text: string;
}

export interface WakatimeEditor {
    name: string;
    total_seconds: number;
    percent: number;
    text: string;
}

export interface WakatimeOS {
    name: string;
    total_seconds: number;
    percent: number;
    text: string;
}

export interface WakatimeStats {
    daily_average: number;
    human_readable_daily_average: string;
    languages: WakatimeLanguage[];
    editors: WakatimeEditor[];
    operating_systems: WakatimeOS[];
}

export interface WakatimeAllTime {
    total_seconds: number;
    text: string;
    range: {
        start_date: string;
        start_text: string;
        end_date: string;
        end_text: string;
    };
}
