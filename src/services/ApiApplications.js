import supabase from "../services/supabase";

export async function createApplication(applicationData) {
    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError) throw new Error("User not found");

    const { error, data } = await supabase.from("applications").insert([
        {
            ...applicationData,
            user_id: user.id,
        },
    ]);

    if (error) throw new Error(error.message);

    return data;
}

export async function getApplications() {
    const { data, error } = await supabase.from("applications").select("*");

    if (error) {
        console.error(error);
        throw new Error("Applications could not be loaded");
    }

    return data;
}

export async function getApplication(id) {
    const { data, error } = await supabase
        .from("applications")
        .select("*")
        .eq("id", id)
        .single();

    if (error) throw new Error("Application not found");
    return data;
}

export async function updateApplication(id, updates) {
    const { data, error } = await supabase
        .from("applications")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error("Failed to update application");
    }

    return data;
}

export async function deleteApplication(id) {
    const { error } = await supabase
        .from("applications")
        .delete()
        .eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Failed to delete application");
    }

    return true;
}

export async function archiveApplication(id) {
    const { error } = await supabase
        .from("applications")
        .update({ status: "Archived" })
        .eq("id", id);

    if (error) throw new Error("Could not archive application");

    return true
}