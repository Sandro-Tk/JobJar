import NavItem from "./NavItem";
import { HiCog6Tooth, HiHome } from "react-icons/hi2";
import { FiFileText, FiPlusCircle } from "react-icons/fi";

function Sidebar() {
    return (
        <nav className="space-y-4">
            <NavItem to="/dashboard" label="Dashboard" icon={HiHome} />
            <NavItem
                to="/applications"
                label="All applications"
                icon={FiFileText}
            />
            <NavItem
                to="/new_application"
                label="Add new application"
                icon={FiPlusCircle}
            />
            <NavItem to="/settings" label="User settings" icon={HiCog6Tooth} />
        </nav>
    );
}

export default Sidebar;
