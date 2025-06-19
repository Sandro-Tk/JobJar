import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useApplications } from "../allApplications/useApplications";
import Spinner from "../../ui/Spinner";
import ApplicationCardItem from "../../ui/ApplicationCardItem";
import ApplicationTable from "../../ui/ApplicationTable";
import FiltersBar from "../../ui/FiltersBar";
import Pagination from "../../ui/Pagination";
import { PAGE_SIZE } from "../../utils/constants";

function ArchivedApplications() {
    const { applications, isLoading } = useApplications();
    const [searchParams, setSearchParams] = useSearchParams();
    const pageParam = Number(searchParams.get("page")) || 1;
    const [page, setPage] = useState(pageParam);

    const sort = searchParams.get("sort") || "desc";

    function handleSortChange(value) {
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set("sort", value);
            return newParams;
        });
        setPage(1);
    }

    const archived = applications
        ?.filter((app) => app.status.toLowerCase() === "archived")
        ?.sort((a, b) =>
            sort === "asc"
                ? new Date(a.applied_at) - new Date(b.applied_at)
                : new Date(b.applied_at) - new Date(a.applied_at)
        );

    const paginated = archived.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    if (isLoading) return <Spinner />;
    if (!archived || archived.length === 0)
        return <p className="text-gray-600">No archived applications.</p>;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-800">
                Archived Applications
            </h1>

            <FiltersBar sort={sort} onSortChange={handleSortChange} />

            <div className="flex flex-col gap-4 md:hidden">
                {paginated.map((app) => (
                    <ApplicationCardItem key={app.id} application={app} />
                ))}
            </div>

            <div className="hidden md:block">
                <ApplicationTable applications={paginated} />
            </div>

            <Pagination
                filter="archived"
                page={page}
                setPage={setPage}
                filtered={archived}
            />
        </div>
    );
}

export default ArchivedApplications;
