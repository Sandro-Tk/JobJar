import { useQuery } from "@tanstack/react-query";
import { getApplication } from "../../services/ApiApplications";

export function useApplication(id) {
    const { data } = useQuery({
        queryKey: ["application", id],
        queryFn: () => getApplication(id),
        enabled: !!id,
    });

    return { data }
}