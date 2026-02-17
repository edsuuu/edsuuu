"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    // Handle open/close animations
    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            // Small delay to ensure render happens before animation starts
            const timer = setTimeout(() => setIsAnimating(true), 50);
            return () => clearTimeout(timer);
        } else {
            setIsAnimating(false);
            // Wait for animation to finish before unmounting
            const timer = setTimeout(() => setShouldRender(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    if (!shouldRender)
        return (
            <div className="md:hidden">
                {/* Top Navbar */}
                <div className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-[#11111a] border-b border-gray-200 dark:border-gray-800 z-50 flex items-center justify-between px-4">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="p-2 -ml-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-pointer"
                    >
                        <Menu size={24} />
                    </button>
                    <div className="font-bold text-primary tracking-tighter text-xl">
                        {"<E/>"}
                    </div>
                    <div className="w-8"></div>{" "}
                    {/* Spacer for centering if needed */}
                </div>
            </div>
        );

    return (
        <div className="md:hidden">
            {/* Top Navbar */}
            <div className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-[#11111a] border-b border-gray-200 dark:border-gray-800 z-50 flex items-center justify-between px-4">
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 -ml-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
                >
                    <Menu size={24} />
                </button>
                <div className="font-bold text-primary tracking-tighter text-xl">
                    {"<E/>"}
                </div>
                <div className="w-8"></div>{" "}
                {/* Spacer for centering if needed */}
            </div>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 z-50 flex ${shouldRender ? "pointer-events-auto" : "pointer-events-none"}`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isAnimating ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setIsOpen(false)}
                ></div>

                {/* Sidebar Container */}
                <div
                    className={`mobile-sidebar-container h-full relative ${isAnimating ? "open" : ""}`}
                >
                    <Sidebar
                        className="h-full border-r shadow-2xl"
                        onClose={() => setIsOpen(false)}
                        isMobile={true}
                    />
                </div>
            </div>
        </div>
    );
}
