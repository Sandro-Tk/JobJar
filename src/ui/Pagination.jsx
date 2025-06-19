import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

function Pagination({ filter, page, setPage, filtered }) {
    const [setSearchParams] = useSearchParams();
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

    function handlePageChange(newPage) {
        setPage(newPage);

        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            params.set("page", newPage);
            if (filter === "all") params.delete("status");
            else params.set("status", filter);
            return params;
        });
    }

    return (
        <div className="flex justify-center gap-2">
            <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
            >
                Prev
            </button>
            <span className="px-2 py-1 text-sm text-gray-700">
                Page {page} of {totalPages}
            </span>
            <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
