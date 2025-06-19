import Modal from "./Modal";

function ConfirmAction({ message, onConfirm, onCancel }) {
    return (
        <Modal onClose={onCancel}>
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Confirm Action
                </h2>
                <p className="text-gray-600">{message}</p>

                <div className="flex justify-end gap-3 mt-6">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 cursor-pointer"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default ConfirmAction;
