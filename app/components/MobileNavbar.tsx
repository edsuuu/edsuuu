"use client";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Sidebar from "./Sidebar";

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    const [lastPathname, setLastPathname] = useState(pathname);

    if (pathname !== lastPathname) {
        setLastPathname(pathname);
        if (isOpen) {
            setIsOpen(false);
            setIsAnimating(false);
        }
    }

    const handleOpen = () => {
        setShouldRender(true);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setIsAnimating(false);
    };

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setIsAnimating(true), 50);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => setShouldRender(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div className="md:hidden">
            <div className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-background border-b border-gray-200 dark:border-gray-800 z-50 flex items-center justify-between px-4">
                <button
                    onClick={handleOpen}
                    className="p-2 -ml-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-pointer"
                >
                    <Menu size={24} />
                </button>
                <div className="font-bold text-primary tracking-tighter text-xl">
                    {"<E/>"}
                </div>
                <div className="w-8"></div>
            </div>

            {shouldRender && (
                <div
                    className={`fixed inset-0 z-50 flex ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
                >
                    <div
                        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isAnimating ? "opacity-100" : "opacity-0"}`}
                        onClick={handleClose}
                    ></div>

                    <div
                        className={`mobile-sidebar-container h-full relative ${isAnimating ? "open" : ""}`}
                    >
                        <Sidebar
                            className="h-full border-r shadow-2xl"
                            onClose={handleClose}
                            isMobile={true}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
