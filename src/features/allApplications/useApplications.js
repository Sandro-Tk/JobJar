import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../../services/ApiApplications";

export function useApplications() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["applications"],
        queryFn: getApplications,
    });

    return {
        applications: data || [],
        isLoading,
        isError,
        error,
    };
}
