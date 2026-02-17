"use client";

import { Send, Code, Briefcase, Mail, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { translations } from "../lang";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
    const { lang } = useLanguage();
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const contactTranslations = translations[lang].contact;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setTimeout(() => {
            setStatus("sent");
        }, 1500);
    };

    return (
        <div className="flex-1 w-full h-full overflow-hidden flex flex-col relative text-gray-800 dark:text-gray-200">
            <div className="scanline"></div>
            <main className="flex-1 flex flex-col justify-center items-center pl-16 md:pl-24 pr-4 md:pr-8 w-full h-full overflow-y-auto">
                <div className="max-w-350 w-full py-10 mx-auto">
                    <div className="mb-10 text-lg md:text-xl font-bold opacity-80 font-mono">
                        <span className="text-green-500">guest@internet</span>:
                        <span className="text-blue-500">~/contact-portal</span>$
                        <span className="text-gray-600 dark:text-gray-100 ml-2">
                            connect --secure edson@dev
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        <div className="bg-gray-100 dark:bg-[#0c0c0c] border border-gray-300 dark:border-gray-800 rounded-lg overflow-hidden shadow-2xl relative h-full min-h-[500px] flex flex-col">
                            <div className="bg-gray-200 dark:bg-[#1a1a1a] px-6 py-3 border-b border-gray-300 dark:border-gray-800 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
                                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                                    Secure Shell - ssh
                                </div>
                            </div>

                            <div className="p-8 md:p-10 font-mono text-base space-y-8 flex-1">
                                <div className="text-green-600 dark:text-green-500 text-sm mb-6">
                                    {contactTranslations.connection_established}
                                    <br />
                                    {contactTranslations.handshake_complete}
                                    <br />
                                    {contactTranslations.encrypted}
                                </div>

                                {status === "sent" ? (
                                    <div className="flex flex-col items-center justify-center py-10 space-y-4 animate-fade-in">
                                        <CheckCircle className="text-green-600 dark:text-green-500 w-16 h-16 animate-pulse" />
                                        <div className="text-center space-y-2">
                                            <p className="text-green-600 dark:text-green-400 font-bold text-lg">
                                                {
                                                    contactTranslations.packet_delivered
                                                }
                                            </p>
                                            <p className="text-gray-500 text-xs text-center border-t border-gray-200 dark:border-gray-800 pt-2 w-full">
                                                Trace ID:{" "}
                                                {Math.random()
                                                    .toString(36)
                                                    .substring(7)
                                                    .toUpperCase()}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="mt-6 text-xs text-primary hover:text-gray-900 dark:hover:text-white underline decoration-primary underline-offset-4"
                                        >
                                            {
                                                contactTranslations.send_new_packet
                                            }
                                        </button>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={handleSubmit}
                                        className={`space-y-6 ${status === "sending" ? "opacity-50 pointer-events-none" : ""}`}
                                    >
                                        <div className="space-y-2">
                                            <label className="block text-primary text-xs uppercase tracking-wider font-bold">
                                                {contactTranslations.from}
                                            </label>
                                            <div className="flex items-center gap-2 border-b border-gray-300 dark:border-gray-800 focus-within:border-primary transition-colors">
                                                <span className="text-gray-500">
                                                    &gt;
                                                </span>
                                                <input
                                                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-700 text-sm h-8 outline-none"
                                                    placeholder={
                                                        contactTranslations.placeholder_email
                                                    }
                                                    required
                                                    type="email"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-primary text-xs uppercase tracking-wider font-bold">
                                                {contactTranslations.subject}
                                            </label>
                                            <div className="flex items-center gap-2 border-b border-gray-300 dark:border-gray-800 focus-within:border-primary transition-colors">
                                                <span className="text-gray-500">
                                                    &gt;
                                                </span>
                                                <input
                                                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-700 text-sm h-8 outline-none"
                                                    placeholder={
                                                        contactTranslations.placeholder_subject
                                                    }
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-primary text-xs uppercase tracking-wider font-bold">
                                                {contactTranslations.message}
                                            </label>
                                            <div className="flex gap-2 border-b border-gray-300 dark:border-gray-800 focus-within:border-primary transition-colors pb-2">
                                                <span className="text-gray-500 mt-1">
                                                    &gt;
                                                </span>
                                                <textarea
                                                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-700 text-sm resize-none outline-none"
                                                    placeholder={
                                                        contactTranslations.placeholder_message
                                                    }
                                                    rows={4}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="pt-4">
                                            <button
                                                className="group flex items-center gap-2 text-green-600 dark:text-green-500 hover:text-green-700 dark:hover:text-green-400 transition-colors text-sm font-bold uppercase tracking-wider cursor-pointer"
                                                type="submit"
                                            >
                                                <span className="group-hover:translate-x-1 transition-transform">
                                                    {
                                                        contactTranslations.send_script
                                                    }
                                                </span>
                                                {status === "sending" ? (
                                                    <span className="animate-spin ml-2">
                                                        /
                                                    </span>
                                                ) : (
                                                    <Send size={16} />
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>

                            <div className="bg-gray-200 dark:bg-[#1a1a1a] px-4 py-1 border-t border-gray-300 dark:border-gray-800 flex justify-between text-[10px] text-gray-500 font-mono">
                                <span>{contactTranslations.mode_insert}</span>
                                <span className="text-primary">
                                    {contactTranslations.encryption_active}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center h-full space-y-12 pl-0 lg:pl-10">
                            <div>
                                <h2 className="text-3xl lg:text-4xl text-gray-900 dark:text-white font-bold mb-8 flex items-center gap-2 font-display">
                                    <span className="text-primary">#</span>{" "}
                                    {contactTranslations.open_ports}
                                </h2>
                                <div className="space-y-10">
                                    <Link
                                        href="https://github.com/edsuuu"
                                        target="_blank"
                                        className="group block"
                                    >
                                        <div className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-mono">
                                            {
                                                contactTranslations.github_protocol
                                            }
                                        </div>
                                        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors font-mono text-lg md:text-xl">
                                            <Code size={24} />
                                            <span className="border-b border-dashed border-gray-400 dark:border-gray-700 group-hover:border-primary pb-0.5">
                                                endpoint: github.com/edsuuu
                                            </span>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-green-600 dark:text-green-500 font-bold">
                                                {"<GET>"}
                                            </span>
                                        </div>
                                    </Link>
                                    <Link
                                        href="https://linkedin.com/in/edson"
                                        target="_blank"
                                        className="group block"
                                    >
                                        <div className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-mono">
                                            {
                                                contactTranslations.linkedin_uplink
                                            }
                                        </div>
                                        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors font-mono text-lg md:text-xl">
                                            <Briefcase size={24} />
                                            <span className="border-b border-dashed border-gray-400 dark:border-gray-700 group-hover:border-primary pb-0.5">
                                                endpoint: linkedin.com/in/edson
                                            </span>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-green-600 dark:text-green-500 font-bold">
                                                {"<CONNECT>"}
                                            </span>
                                        </div>
                                    </Link>
                                    <Link
                                        href="mailto:edson@dev.local"
                                        className="group block"
                                    >
                                        <div className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-mono">
                                            {contactTranslations.direct_signal}
                                        </div>
                                        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors font-mono text-lg md:text-xl">
                                            <Mail size={24} />
                                            <span className="border-b border-dashed border-gray-400 dark:border-gray-700 group-hover:border-primary pb-0.5">
                                                endpoint: edson@dev.local
                                            </span>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-green-600 dark:text-green-500 font-bold">
                                                {"<SMTP>"}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
