import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./ui/ProtectedRoute";
import SignUpForm from "./features/Authentication/SignUpForm";
import LoginForm from "./features/authentication/LoginForm";
import PageNotFound from "./ui/PageNotFound";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true} />
            <BrowserRouter>
                <Routes>
                    <Route
                        element={
                            <ProtectedRoute>
                                <AppLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route
                            index
                            element={<Navigate replace to="dashboard" />}
                        />
                        <Route element={<Dashboard />} path="dashboard"></Route>
                    </Route>
                    <Route element={<LoginForm />} path="login"></Route>
                    <Route element={<SignUpForm />} path="signup"></Route>
                    <Route element={<PageNotFound />} path="*" />
                </Routes>
            </BrowserRouter>
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{
                    margin: "8px",
                }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "#fff",
                        color: "#374151",
                    },
                }}
            />
        </QueryClientProvider>
    );
}

export default App;
