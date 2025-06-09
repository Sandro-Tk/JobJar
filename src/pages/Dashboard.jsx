import { useUser } from "../features/authentication/useUser";

export default function Dashboard() {
    const { user } = useUser();
    console.log(user);
    const { display_name } = user.user_metadata;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Welcome, {display_name}</h1>
            <p className="text-sm text-gray-500 mt-1">
                This will be your job tracker dashboard.
            </p>
        </div>
    );
}
