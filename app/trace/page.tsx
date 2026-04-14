"use client";

import "mapbox-gl/dist/mapbox-gl.css";

import { Activity, Globe, ShieldCheck } from "lucide-react";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

import TerminalPrompt from "../components/TerminalPrompt";
import { useLanguage } from "../contexts/LanguageContext";
import { useLoader } from "../contexts/LoaderContext";
import { translations } from "../lang";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

interface VisitorRecord {
    _id: string;
    ip: string;
    city?: string;
    country?: string;
    isp?: string;
    loc?: string;
    timestamp: string;
}

export default function TracePage() {
    const { lang } = useLanguage();
    const { sessionStartTime } = useLoader();
    const t = translations[lang].tracker;

    const [uptime, setUptime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
    const [viewCount, setViewCount] = useState<string>("0000000");
    const [activeNodes, setActiveNodes] = useState<number>(0);
    const [currentVisitor, setCurrentVisitor] = useState<
        Partial<VisitorRecord>
    >({});

    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const markersRef = useRef<mapboxgl.Marker[]>([]);

    const [coords, setCoords] = useState({ lat: -23.5505, lng: -46.6333 });

    // Uptime counter
    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            const diff = now - sessionStartTime;
            const h = Math.floor(diff / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);
            const ms = Math.floor((diff % 1000) / 10);
            setUptime({ h, m, s, ms });
        }, 10);
        return () => clearInterval(interval);
    }, [sessionStartTime]);

    // Map initialization
    useEffect(() => {
        if (!mapContainerRef.current || !MAPBOX_TOKEN) return;

        mapboxgl.accessToken = MAPBOX_TOKEN;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/standard",
            center: [coords.lng, coords.lat],
            zoom: 1.5,
            pitch: 45,
            bearing: 0,
            antialias: true,
        });

        map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

        map.on("style.load", () => {
            try {
                map.setConfigProperty("basemap", "lightPreset", "night");
            } catch (e) {
                console.warn("Could not set night preset:", e);
            }
        });

        map.on("move", () => {
            const center = map.getCenter();
            setCoords({ lat: center.lat, lng: center.lng });
        });

        mapRef.current = map;

        return () => {
            map.remove();
        };
    }, []);

    // Visitor tracking and marker updates
    useEffect(() => {
        const trackAndLoad = async () => {
            try {
                // 1. Record visit via backend
                const saveRes = await fetch("/api/trace", { method: "POST" });
                const saveData = await saveRes.json();

                if (!saveRes.ok)
                    throw new Error(saveData.error || "Failed to record visit");

                const detectedVisitor = saveData.currentVisitor;
                setCurrentVisitor(detectedVisitor);
                setViewCount(saveData.totalViews.toString().padStart(7, "0"));

                // Mantém vista global (sem zoom profundo) conforme solicitado
                if (mapRef.current && detectedVisitor.loc) {
                    const [lat, lng] = detectedVisitor.loc
                        .split(",")
                        .map(Number);
                    mapRef.current.flyTo({
                        center: [lng, lat],
                        zoom: 1.5,
                        pitch: 45,
                        duration: 3000,
                        essential: true,
                    });
                }

                // 2. Fetch all visitors
                const listRes = await fetch("/api/trace");
                const listData = await listRes.json();

                if (!listRes.ok)
                    throw new Error(listData.error || "Failed to fetch visits");

                const allVisits: VisitorRecord[] = listData.visits;
                setActiveNodes(listData.totalViews);

                // 3. Update markers
                if (mapRef.current) {
                    markersRef.current.forEach((m) => m.remove());
                    markersRef.current = [];

                    allVisits.forEach((v) => {
                        if (!v.loc) return;
                        const [lat, lng] = v.loc.split(",").map(Number);
                        const isCurrent = v.ip === detectedVisitor.ip;

                        const el = document.createElement("div");
                        el.className = `w-4 h-4 ${isCurrent ? "bg-primary" : "bg-primary/40"} rounded-full shadow-[0_0_15px_rgba(0,164,239,0.8)] border-2 border-white/40`;

                        if (isCurrent) {
                            el.classList.add("ping-pulse");

                            const label = document.createElement("div");
                            label.className =
                                "absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap z-50 transition-all duration-300";
                            label.innerHTML = `<span class="text-[10px] text-primary font-bold tracking-widest bg-black/80 px-2 py-1 border border-primary/30 backdrop-blur-md rounded shadow-2xl">${t.you_are_here}</span>`;
                            el.appendChild(label);
                        }

                        const marker = new mapboxgl.Marker(el)
                            .setLngLat([lng, lat])
                            .addTo(mapRef.current!);

                        markersRef.current.push(marker);
                    });
                }
            } catch (err) {
                console.error("Trace error:", err);
            }
        };

        trackAndLoad();
    }, [t.you_are_here]);

    const formatNumber = (num: number, digits: number = 2) => {
        return num.toString().padStart(digits, "0");
    };

    return (
        <div className="flex-1 w-full h-screen overflow-hidden flex flex-col relative text-gray-800 dark:text-gray-200 bg-black">
            <div className="scanline"></div>

            {/* Map Container - Full Screen Background - Alinhado ao Sidebar (64px) */}
            <div className="absolute inset-x-0 inset-y-0 md:left-16 z-0 pointer-events-none overflow-hidden h-full w-full">
                <div
                    ref={mapContainerRef}
                    className="h-full w-full pointer-events-auto opacity-90 transition-opacity duration-1000"
                />
                {/* Visual Blending Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none"></div>
            </div>

            {/* HUD Overlay - Alinhado ao Sidebar (64px) */}
            <div className="relative z-10 flex flex-col h-full pointer-events-none md:pl-16">
                <main className="flex-1 flex flex-col p-4 md:p-12 w-full max-w-7xl mx-auto">
                    {/* Header HUD */}
                    <div className="mb-8 pointer-events-auto flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                        <div className="flex-1">
                            <TerminalPrompt
                                user="root"
                                host="edson-dev"
                                path="~"
                                command={t.command}
                            />
                            <div className="h-px w-full bg-gray-200 dark:bg-gray-800/50 mt-4 shadow-[0_0_10px_rgba(34,197,94,0.1)]"></div>
                        </div>
                    </div>

                    <div className="flex-1"></div>

                    <div className="mt-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col items-center md:items-start order-2 md:order-1 bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 pointer-events-auto shadow-2xl transition-all duration-300 hover:border-primary/30">
                            <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-1 font-mono">
                                {t.session_uptime}
                            </span>
                            <div className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-white font-mono">
                                {formatNumber(uptime.h)}:
                                {formatNumber(uptime.m)}:
                                {formatNumber(uptime.s)}:
                                <span className="text-primary">
                                    {formatNumber(uptime.ms)}
                                </span>
                            </div>
                        </div>

                        <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-10 py-6 flex items-center gap-12 rounded-2xl order-1 md:order-2 pointer-events-auto shadow-2xl transition-all duration-300 hover:border-primary/30">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-mono">
                                    {t.total_access}
                                </span>
                                <span className="text-2xl md:text-4xl font-bold text-primary font-mono tabular-nums leading-none">
                                    {viewCount}
                                </span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

TracePage.displayName = "TracePage";
