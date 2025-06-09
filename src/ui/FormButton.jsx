function FormButton({ children, ...props }) {
    return (
        <button
            className="w-full bg-blue-600 text-white p-2 rounded mb-2 cursor-pointer hover:bg-blue-800 transition duration-300"
            {...props}
        >
            {children}
        </button>
    );
}

export default FormButton;
