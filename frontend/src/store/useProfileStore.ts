import { profiles } from "@/data/profile";
import { create } from "zustand";

type ProfileStore = {
  profilePhoto: string;
  setProfilePhoto: (photo: string) => void;
};

export const useProfileStore = create<ProfileStore>((set) => ({
  profilePhoto: profiles[0].image,
  setProfilePhoto: (photo) => set({ profilePhoto: photo }),
}));