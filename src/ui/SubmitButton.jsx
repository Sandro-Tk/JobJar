function SubmitButton({ className = "", children, ...props }) {
    return (
        <button
            type="submit"
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default SubmitButton;
