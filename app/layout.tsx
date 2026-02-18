import "./globals.css";

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

import Footer from "./components/Footer";
import MobileNavbar from "./components/MobileNavbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Sidebar from "./components/Sidebar";
import GlobalLoader from "./components/TerminalLoader";
import { LanguageProvider } from "./contexts/LanguageContext";
import { WakatimeProvider } from "./contexts/WakatimeContext";
import TransitionComponent from "./transition/TransitionComponent";
import { TransitionProvider } from "./transition/TransitionContext";

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Edson - Fullstack Developer",
    description: "Edson's Developer Portfolio",
};

function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${jetbrainsMono.variable} antialiased font-sans text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300 overflow-hidden relative`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <LanguageProvider>
                        <WakatimeProvider>
                            <TransitionProvider>
                                <GlobalLoader />
                                <ParticlesBackground />

                                <div className="absolute inset-0 digital-grid pointer-events-none z-0 opacity-20 dark:opacity-30"></div>

                                <MobileNavbar />

                                <div className="flex h-screen relative z-10 pt-16 md:pt-0">
                                    <Sidebar className="hidden md:flex" />
                                    <main className="flex-1 flex flex-col relative overflow-hidden">
                                        <TransitionComponent>
                                            {children}
                                        </TransitionComponent>
                                    </main>
                                    <Footer />
                                </div>
                            </TransitionProvider>
                        </WakatimeProvider>
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
