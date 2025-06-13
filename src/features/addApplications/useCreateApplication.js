import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createApplication } from "../../services/ApiApplications";
import toast from "react-hot-toast";

export function useCreateApplication() {
    const queryClient = useQueryClient();

    const { mutate: createNewApplication, isLoading: isCreating } = useMutation({
        mutationFn: createApplication,
        onSuccess: () => {
            toast.success("New application successfully created");
            queryClient.invalidateQueries({ queryKey: ["applications"] });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isCreating, createNewApplication }
}
