function Input({ className = "", ...props }) {
    return (
        <input
            {...props}
            className={`w-full p-2 border rounded ${className}`}
        />
    );
}

export default Input;
