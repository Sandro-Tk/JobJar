import NavItem from "./NavItem";
import { HiCog6Tooth, HiHome } from "react-icons/hi2";
import { FiFileText, FiPlusCircle } from "react-icons/fi";

function Sidebar({ onNavItemClick }) {
    return (
        <nav className="space-y-4">
            <NavItem
                onNavItemClick={onNavItemClick}
                to="/dashboard"
                label="Dashboard"
                icon={HiHome}
            />
            <NavItem
                onNavItemClick={onNavItemClick}
                to="/all_applications"
                label="All applications"
                icon={FiFileText}
            />
            <NavItem
                onNavItemClick={onNavItemClick}
                to="/new_application"
                label="Add new application"
                icon={FiPlusCircle}
            />
            <NavItem
                onNavItemClick={onNavItemClick}
                to="/settings"
                label="User settings"
                icon={HiCog6Tooth}
            />
        </nav>
    );
}

export default Sidebar;
