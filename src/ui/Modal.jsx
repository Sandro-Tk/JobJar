import { useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === "Escape") onClose();
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={onClose}
        >
            <div
                className="bg-white rounded shadow-lg max-w-xl w-full p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
}

export default Modal;
