import { supabase } from "../lib/supabase";
import { userStore } from "../store/userStore";

export async function getUserProfile() {
  const { data: authData } = await supabase.auth.getUser();

  const user = authData.user;
  if (!user) return;

  const { data, error } = await supabase
    .from("users")
    .select("id, name, profile_url")
    .eq("id", user.id)
    .single();

  if (error) {
    console.error("Error fetching user profile:", error.message);
    return;
  }

  if (data) {
    userStore.getState().setUser({
      id: data.id,
      name: data.name,
      profile_url: data.profile_url,
    });
  }
}