import toast from "react-hot-toast";
import supabase from "../services/supabase";

function ExportDataButton() {
    async function handleExport() {
        const { data, error } = await supabase.from("applications").select("*");

        if (error) {
            toast.error("Failed to export applications");
            return;
        }

        if (!data.length) {
            toast("No applications to export");
            return;
        }

        const headers = Object.keys(data[0]);
        const rows = data.map((app) =>
            headers.map((h) => JSON.stringify(app[h] ?? "")).join(",")
        );
        const csvContent = [headers.join(","), ...rows].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "job_applications.csv";
        a.click();

        URL.revokeObjectURL(url);
        toast.success("Exported as CSV");
    }

    return (
        <button
            onClick={handleExport}
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm cursor-pointer"
        >
            Export applications as CSV
        </button>
    );
}

export default ExportDataButton;
