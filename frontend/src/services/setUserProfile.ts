import { supabase } from "../lib/supabase";

export async function setUserProfile(profile_url: string) {
  const { data: authData } = await supabase.auth.getUser();

  const user = authData.user;
  if (!user) {
    console.error("User not logged in.");
    return;
  }

  const { error } = await supabase
    .from("users")
    .update({ profile_url: profile_url })
    .eq("id", user.id);

  if (error) {
    console.error("Error fetching user profile:", error.message);
    return;
  }
}
