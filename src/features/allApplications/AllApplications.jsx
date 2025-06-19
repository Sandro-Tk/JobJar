import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useApplications } from "./useApplications";
import { PAGE_SIZE } from "../../utils/constants";
import Spinner from "../../ui/Spinner";
import ApplicationCardItem from "../../ui/ApplicationCardItem";
import ApplicationTable from "../../ui/ApplicationTable";
import FiltersBar from "../../ui/FiltersBar";
import NoApplications from "../../ui/NoApplications";
import Pagination from "../../ui/Pagination";

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

    const filtered = applications
        .filter((app) => app.status !== "Archived")
        .filter((app) => (filter === "all" ? true : app.status === filter));

    const sorted = [...filtered].sort((a, b) => {
        const dateA = new Date(a.applied_at);
        const dateB = new Date(b.applied_at);
        return sort === "asc" ? dateA - dateB : dateB - dateA;
    });

    const paginated = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    if (isLoading) return <Spinner />;
    if (!applications.length) return <NoApplications />;

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

            <Pagination
                filter={filter}
                page={page}
                setPage={setPage}
                filtered={filtered}
            />
        </div>
    );
}

export default AllApplications;
