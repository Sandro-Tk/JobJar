import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateApplication as updateApplicationApi } from "../../services/ApiApplications";
import toast from "react-hot-toast";

export function useUpdateApplication() {
    const queryClient = useQueryClient();

    const { mutate: updateApplication, isLoading: isUpdating } = useMutation({
        mutationFn: async ({ id, updates }) =>
            updateApplicationApi(id, updates),
        onSuccess: (updatedApp) => {
            queryClient.invalidateQueries({ queryKey: ["applications"] });
            queryClient.invalidateQueries({
                queryKey: ["application", updatedApp.id],
            });
            toast.success("Application successfully updated");
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { updateApplication, isUpdating };
}
