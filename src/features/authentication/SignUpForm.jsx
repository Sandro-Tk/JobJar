import { useForm } from "react-hook-form";
import { useSignup } from "./useSignUp";
import { Link } from "react-router-dom";
import Input from "../../ui/Input";
import FormItem from "../../ui/FormItem";
import toast from "react-hot-toast";
import FormError from "../../ui/FormError";
import FormButton from "../../ui/FormButton";

function SignUpForm() {
    const { signup, isLoading } = useSignup();

    const {
        register,
        getValues,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    function onSubmit({ fullName, email, password }) {
        signup(
            { fullName, email, password },
            {
                onError: (err) => toast.error(err.message || "Signup failed"),
                onSuccess: () => reset(),
            }
        );
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <form
                className="flex flex-col gap-5 w-full max-w-sm p-6 bg-white rounded shadow"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-xl font-semibold mb-4 justify-self-center">
                    Create an account
                </h2>
                <FormItem>
                    <Input
                        type="text"
                        id="fullName"
                        placeholder="Fullname"
                        disabled={isLoading}
                        {...register("fullName", {
                            required: "Fullname is required",
                        })}
                    />
                    {errors.fullName && (
                        <FormError>{errors.fullName.message}</FormError>
                    )}
                </FormItem>
                <FormItem>
                    <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        autoComplete="username"
                        disabled={isLoading}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email format",
                            },
                        })}
                    />
                    {errors.email && (
                        <FormError>{errors.email.message}</FormError>
                    )}
                </FormItem>
                <FormItem>
                    <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                        disabled={isLoading}
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message:
                                    "Password must be at least 6 characters",
                            },
                        })}
                    />
                    {errors.password && (
                        <FormError>{errors.password.message}</FormError>
                    )}
                </FormItem>
                <FormItem>
                    <Input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm password"
                        disabled={isLoading}
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) =>
                                value === getValues("password") ||
                                "Passwords do not match",
                        })}
                    />
                    {errors.confirmPassword && (
                        <FormError>{errors.confirmPassword.message}</FormError>
                    )}
                </FormItem>
                <FormButton disabled={isLoading}>
                    {!isLoading ? "Sign up" : <SpinnerMini />}
                </FormButton>
                <Link className="flex justify-center text-md" to="/login">
                    Already have an account? Log in.
                </Link>
            </form>
        </div>
    );
}

export default SignUpForm;
