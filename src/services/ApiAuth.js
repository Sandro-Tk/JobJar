import supabase from './supabase'

export async function signup({ fullName, email, password }) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                display_name: fullName
            }
        },
    });

    if (error) throw new Error(error.message);

    return data;
}

export async function login({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) throw new Error(error.message);

    return data;
}

export async function getCurrentUser() {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) throw new Error("Not authenticated");
    return data.user;
}
