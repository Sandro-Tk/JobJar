import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/ApiAuth";

export function useUser() {
    const { isLoading, data: user } = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
        retry: false,
    });

    return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
