import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useApplications } from "./useApplications";
import { PAGE_SIZE } from "../../utils/constants";
import Spinner from "../../ui/Spinner";
import ApplicationCardItem from "../../ui/ApplicationCardItem";
import ApplicationTable from "../../ui/ApplicationTable";
import FiltersBar from "../../ui/FiltersBar";

function AllApplications() {
    const { applications, isLoading } = useApplications();

    const [searchParams, setSearchParams] = useSearchParams();
    const pageParam = Number(searchParams.get("page")) || 1;
    const [page, setPage] = useState(pageParam);

    const filter = searchParams.get("status") || "all";

    const sort = searchParams.get("sort") || "desc";

    function handleFilterChange(value) {
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            if (value === "all") {
                newParams.delete("status");
            } else {
                newParams.set("status", value);
            }
            return newParams;
        });
        setPage(1);
    }

    function handleSortChange(value) {
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            if (value === "desc") {
                newParams.delete("sort");
            } else {
                newParams.set("sort", value);
            }
            return newParams;
        });
    }

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

    const filtered =
        filter === "all"
            ? applications
            : applications.filter((app) => app.status === filter);

    const sorted = [...filtered].sort((a, b) => {
        const dateA = new Date(a.applied_at);
        const dateB = new Date(b.applied_at);
        return sort === "asc" ? dateA - dateB : dateB - dateA;
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const paginated = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    if (isLoading) return <Spinner />;
    if (!applications.length)
        return <p className="text-gray-600">No applications found.</p>;

    return (
        <div className="space-y-6">
            <FiltersBar
                filter={filter}
                onFilterChange={handleFilterChange}
                sort={sort}
                onSortChange={handleSortChange}
            />

            <div className="flex flex-col gap-4 md:hidden">
                {paginated.map((app) => (
                    <ApplicationCardItem key={app.id} application={app} />
                ))}
            </div>

            <div className="hidden md:block">
                <ApplicationTable applications={paginated} />
            </div>

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
        </div>
    );
}

export default AllApplications;
