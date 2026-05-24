import { profiles } from "@/data/profile";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProfileStore = {
  profilePhoto: string;
  setProfilePhoto: (photo: string) => void;
};

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      profilePhoto: profiles[0].image,
      setProfilePhoto: (photo) => set({ profilePhoto: photo }),
    }),
    {
      name: "user-storage",
    },
  ),
);
