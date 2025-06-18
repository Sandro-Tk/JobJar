function HeaderButton({ children, className = "", ...props }) {
    return (
        <button
            className={`px-4 py-2 rounded text-white transition bg-blue-600 hover:bg-blue-800 cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default HeaderButton;
