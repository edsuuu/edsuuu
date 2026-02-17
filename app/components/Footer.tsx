export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full h-8 bg-white dark:bg-[#11111a] border-t border-gray-200 dark:border-gray-800 z-20 flex items-center justify-between px-4 md:pl-24 text-[10px] uppercase tracking-widest text-gray-500">
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>{" "}
                    ONLINE
                </span>
                <span className="hidden md:inline">LATENCY: 24ms</span>
            </div>
            <div className="flex items-center gap-4">
                <span>UTF-8</span>
                <span>LN 42, COL 12</span>
            </div>
        </footer>
    );
}
