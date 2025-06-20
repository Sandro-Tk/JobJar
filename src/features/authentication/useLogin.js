import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from '../../services/ApiAuth'


export function useLogin() {
    const queryClient = useQueryClient()

    const navigate = useNavigate()

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user)
            navigate('/dashboard', { replace: true })
        }
    })

    return { login, isLoading }
}