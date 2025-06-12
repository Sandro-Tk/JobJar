import { HiMoon } from "react-icons/hi2";

function DarkModeToggle() {
    return (
        <button className="flex justify-center items-center h-10 w-10 p-2 rounded text-white transition bg-blue-600 hover:bg-blue-800">
            <HiMoon className="text-lg" />
        </button>
    );
}

export default DarkModeToggle;
