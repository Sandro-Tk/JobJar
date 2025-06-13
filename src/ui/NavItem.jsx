import { NavLink } from "react-router-dom";

function NavItem({ onNavItemClick, icon: Icon, label, to }) {
    return (
        <NavLink
            onClick={onNavItemClick}
            to={to}
            className={({
                isActive,
            }) => `flex items-center gap-3 px-2 py-2 rounded w-full text-left transition bg-white shadow-sm
        ${
            isActive
                ? "bg-gray-100 text-blue-600 font-medium"
                : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
        }`}
        >
            <Icon className="text-lg" />
            {label}
        </NavLink>
    );
}

export default NavItem;
