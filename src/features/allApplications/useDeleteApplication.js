import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteApplication as deleteApplicationApi } from "../../services/ApiApplications";
import toast from "react-hot-toast";

export function useDeleteApplication() {
    const queryClient = useQueryClient();

    const { mutate: deleteApplication, isLoading: isDeleting } = useMutation({
        mutationFn: deleteApplicationApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["applications"] });
            toast.success("Application successfully deleted");
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { deleteApplication, isDeleting };
}
