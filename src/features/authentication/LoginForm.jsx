import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import Input from "../../ui/Input";
import toast from "react-hot-toast";
import FormItem from "../../ui/FormItem";
import FormError from "../../ui/FormError";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});

    const { login, isLoading } = useLogin();

    function validateFields() {
        const errors = {};
        if (!email) errors.email = "Email is required";
        if (!password) errors.password = "Password is required";
        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!validateFields()) return;

        login(
            { email, password },
            {
                onSettled: () => {
                    setEmail("");
                    setPassword("");
                },
                onError: (err) => {
                    toast.error(err.message || "Login Failed");
                },
            }
        );
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <form
                className="flex flex-col gap-5 w-full max-w-sm p-6 bg-white rounded shadow"
                onSubmit={handleSubmit}
            >
                <h2 className="text-xl font-semibold mb-4 justify-self-center">
                    Log into your account
                </h2>
                <FormItem>
                    <Input
                        type="email"
                        id="email"
                        autoComplete="username"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {fieldErrors.email && (
                        <FormError>{fieldErrors.email}</FormError>
                    )}
                </FormItem>
                <FormItem>
                    <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {fieldErrors.password && (
                        <FormError>{fieldErrors.password}</FormError>
                    )}
                </FormItem>
                <button
                    className="w-full bg-blue-600 text-white p-2 rounded mb-2 cursor-pointer hover:bg-blue-800 transition duration-300"
                    disabled={isLoading}
                >
                    {!isLoading ? "Log in" : <SpinnerMini />}
                </button>
                <Link className="flex justify-center text-md" to="/signup">
                    Create an account
                </Link>
            </form>
        </div>
    );
}

export default LoginForm;
