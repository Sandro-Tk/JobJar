import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import supabase from "../services/supabase";
import HeaderButton from "./HeaderButton";
import toast from "react-hot-toast";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import { FiMenu } from "react-icons/fi";

export default function Header({ onMenuClick }) {
    const { user } = useUser();

    const navigate = useNavigate();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            toast.success("You have been logged out");
            navigate("/login");
        } else {
            toast.error("Logout failed. Try again.");
        }
    };

    const displayName = user.user_metadata.display_name;

    return (
        <header className="min-w-[320px] w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
            <div className="w-full px-2 sm:px-6 py-4 sm:py-4">
                <div className="flex justify-between items-center w-full mx-auto">
                    <div className="flex items-center gap-2 sm:gap-4">
                        <button
                            onClick={onMenuClick}
                            className="md:hidden p-2 rounded text-gray-600 hover:bg-gray-100"
                        >
                            <FiMenu className="h-6 w-6" />
                        </button>
                        <Logo />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <span className="text-md text-gray-600 hidden sm:inline">
                            Welcome,{" "}
                            <span className="font-medium text-gray-800">
                                {displayName}
                            </span>
                        </span>
                        <DarkModeToggle />
                        <HeaderButton onClick={handleLogout}>
                            Logout
                        </HeaderButton>
                    </div>
                </div>
            </div>
        </header>
    );
}
