import StatusField from "./StatusField";

function FiltersBar({ filter, sort, onFilterChange, onSortChange }) {
    return (
        <div className="flex gap-4 items-end mb-4">
            <div>
                <StatusField
                    label="Filter by Status"
                    value={filter}
                    onChange={(e) => onFilterChange(e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sort by Date
                </label>
                <select
                    className="input"
                    value={sort}
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <option value="desc">Newest First</option>
                    <option value="asc">Oldest First</option>
                </select>
            </div>
        </div>
    );
}

export default FiltersBar;
