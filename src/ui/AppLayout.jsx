import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
    return (
        <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[220px_1fr]">
            <div className="row-span-1 col-span-2 bg-blue-600 text-white p-4">
                <Header />
            </div>
            <div className="row-span-1 col-span-1 bg-gray-100 p-4">
                <Sidebar />
            </div>
            <div className="row-span-1 col-span-1 bg-white p-4">
                <Outlet />
            </div>
        </div>
    );
}

export default AppLayout;
