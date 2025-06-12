import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="h-screen grid grid-rows-[auto_1fr] md:grid-cols-[240px_1fr] grid-cols-1">
            <div className="row-span-1 col-span-2 p-4">
                <Header onMenuClick={() => setIsSidebarOpen((prev) => !prev)} />
            </div>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/30 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
            <div
                className={`p-4 fixed top-[110px] left-0 z-40 w-60 transform transition-transform duration-300
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:relative md:top-0 md:h-auto md:translate-x-0 md:block md:col-span-1`}
            >
                <Sidebar onNavItemClick={() => setIsSidebarOpen(false)} />
            </div>
            <div className="p-4 md:col-span-1 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
}

export default AppLayout;
