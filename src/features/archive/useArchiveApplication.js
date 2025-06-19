import { useMutation, useQueryClient } from "@tanstack/react-query";
import { archiveApplication as archiveApplicationApi } from "../../services/ApiApplications";
import toast from "react-hot-toast";

export function useArchiveApplication() {
    const queryClient = useQueryClient();

    const { mutate: archiveApplication, isLoading } = useMutation({
        mutationFn: archiveApplicationApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["applications"] });
            toast.success('Application archived')
        },
        onError: (err) => {
            toast.error(err.message)
        }
    });

    return { archiveApplication, isArchiving: isLoading };
}
