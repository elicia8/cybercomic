import type { UserData } from "@/types/userData";
import { create } from "zustand";
type UserStore = UserData & {
  setUser: (data: Partial<UserData>) => void;
  clearProfile: () => void;
};

export const userStore = create<UserStore>((set) => ({
  id: null,
  name: null,
  profile_url: null,

  setUser: (data) =>
    set({
      id: data.id,
      name: data.name,
      profile_url: data.profile_url,
    }),

  clearProfile: () =>
    set({
      profile_url: null,
    }),
}));
