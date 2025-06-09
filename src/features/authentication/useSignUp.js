import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/ApiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
    const navigate = useNavigate()

    const { mutate: signup, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: () => {
            navigate('/dashboard')
            toast.success(
                "Account successfully created!"
            );
        },
    });

    return { signup, isLoading };
}
